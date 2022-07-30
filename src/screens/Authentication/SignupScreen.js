import React, {useState} from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import CustomInput from "../../constants/CustomInput";
import Footer from "../../constants/Footer";
import RegistrationContainer from "../../containers/RegistrationContainer";
import { Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import Header from "../../constants/Header";
import CustomButton from "../../constants/CustomButton";
import PropTypes from "prop-types";
import { gql, useMutation } from "@apollo/client";
import * as SecureStore from "expo-secure-store";
import { storeToken } from "./SignInScreen";
//import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SIGN_UP = gql`
	mutation signup($email: String!, $contact: String!, $password: String!){
 	 signUp(email: $email, contact: $contact, password: $password) {
		id
		token
	 }
	}
`;

export const storeUserId = id => {
	SecureStore.setItemAsync("userId", id);
};
export default function SignupScreen({ navigation }) {
	const [contact, setContact] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	// const [confirmPassword, setConfirmPassword] = useState();
	//signing up users
	const [signup, { loading, error }] = useMutation(SIGN_UP, {
		variables: {
			email: email,
			contact: contact,
			password: password
		}, 
		onCompleted: data => {
			console.log("data:",data);
			storeUserId(data.signUp.id);
			storeToken(data.signUp.token);
			console.log(data.token);
			console.log("from Signup: ",data.signUp);
			navigation.navigate("FirstRegistration");
		}
	});

	if (loading) {
		return <Text>Loading......</Text>; 
	}

	if (error) {
		console.error(error);
		console.log(error);
		return <Text>Error................</Text>;
	}

	const handleSignUp = () => {
		signup();
		// console.log(phoneNumber, email, password);
		//navigation.navigate("FirstRegistration", );
	};

	const handleSignIn = () => {
		navigation.navigate("SignIn");
	};

	// const handleInputChange = (text) => {
	// 	setValues({
	// 		...values,
	// 		[text.target.placeholder]: type.target.value
	// 	});
	// };

	return (
		<RegistrationContainer
			header={
				<Header 
					heading="Tusome"
					description="Let`s set your account" 
					hasPaperPlane={true}
				/>
			}
			footer={
				<Footer 
					description="Already have an account?"
					buttonText="Sign in"
					onPress={handleSignIn}
				/>
			}

		>
			<SafeAreaView>
				<CustomInput 
					icon={<SimpleLineIcons name="phone" size={20} color="black" />}
					placeholder="Phone number"
					onChangeText={text => setContact(text) }
					keyboardType="number-pad"
					value={contact}
					isRequired={true}
					type="tel"
				/>

				<CustomInput 
					icon={<Fontisto name="email" size={20} color="black" />}
					placeholder="Enter email"
					onChangeText={text => setEmail(text)}
					value={email}
					isRequired={true}
					type="email"
				/>
				<CustomInput 
					icon={<SimpleLineIcons name="lock" size={20} color="black" />}
					placeholder="Enter password"
					onChangeText={text => setPassword(text)}
					secureTextEntry={true}
					value={password}
					isRequired={true}
					type="password"
				/>
				{/* <CustomInput 
					icon={<SimpleLineIcons name="lock" size={20} color="black" />}
					placeholder="Confirm password"
					onChangeText={handleInputChange}
					secureTextEntry={true}
					value={values}
					isRequired={true}
					type="password"
				/> */}
			</SafeAreaView>
			<View style={styles.btnContainer}>
				<CustomButton 
					btnText="SIGN UP"
					onPress={handleSignUp}
				/>
			</View>
		</RegistrationContainer>
	);
}

SignupScreen.propTypes = {
	navigation: PropTypes.object,
};

const styles = StyleSheet.create({
	btnContainer: {
		alignItems: "center",
		margin: 20,
	}
});
