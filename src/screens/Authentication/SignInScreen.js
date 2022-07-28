import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView  } from "react-native";
import { Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import CustomInput from "../../constants/CustomInput";
import Header from "../../constants/Header";
import RegistrationContainer from "../../containers/RegistrationContainer";
import CustomButton from "../../constants/CustomButton";
import Footer from "../../constants/Footer";
import GlobalContext, { useGlobalContext } from "../../../GlobalContext";
import { gql, useMutation } from "@apollo/client";
import * as SecureStore from "expo-secure-store";

const SIGNIN_USER = gql`
	mutation signin($email: String!, $password: String!){
 	 signIn(email: $email, password: $password)
	}
`;

export const storeToken = token => {
	SecureStore.setItemAsync("userToken", token);
};

export default function SignInScreen({ navigation }) {
	const { authContext } = useGlobalContext();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const [signin, {loading, error }] = useMutation(SIGNIN_USER, {
		variables: {
			email: email,
			password: password
		},
		onCompleted: data => {
			alert(data);
			storeToken(data.token);
			console.log(data.signIn);
		}
	});
	//const signIn = authContext.signIn;
	if (loading) {alert("loading user");}


	const handleSignIn = () => {
		//signIn({ email, password});
		signin();
		
		alert(email, password);
	};

	const handleSignup = () => {
		navigation.navigate("Signup");
	};

	return (
		<RegistrationContainer
			header={
				<Header 
					heading="Welcome Back"
					description="Sign in to continue"
					hasPaperPlane={false}
					showLoginSvg={true}
					isOnLogin={true}
				/>
			}   
			footer={
				<Footer 
					description="Have no account? "
					buttonText="Sign up here"
					onPress={handleSignup}
				/>
			}
		>
			<KeyboardAvoidingView enabled>
				<View>
					<CustomInput 
						icon={<Fontisto name="email" size={20} color="black" />}
						placeholder="Enter email"
						onChangeText={text => setEmail(text)}
						isRequired={true}
						value={email}
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
				</View>
				<View style={{alignItems: "center", marginVertical: 20}}>
					<CustomButton 
						btnText="SIGN IN"
						onPress={handleSignIn}
					/>
				</View>
			</KeyboardAvoidingView>
		</RegistrationContainer>
	);
}
