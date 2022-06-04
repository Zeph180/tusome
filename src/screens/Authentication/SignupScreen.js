import React, {useState} from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import CustomInput from "../../constants/CustomInput";
import Footer from "../../constants/Footer";
import RegistrationContainer from "../../containers/RegistrationContainer";
import { Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import Header from "../../constants/Header";
import CustomButton from "../../constants/CustomButton";
import PropTypes from "prop-types";
//import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignupScreen({ navigation }) {
	const [phoneNumber, setPhoneNumber] = useState();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSignUp = () => {
		navigation.navigate("FirstRegistration", );
	};
	const handleSignIn = () => {
		navigation.navigate("SignIn");
	};
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
					placeholder="Enter phone"
					onChange={f=>f}
					keyboardType="number-pad"
					value={phoneNumber}
					isRequired={true}
				/>

				<CustomInput 
					icon={<Fontisto name="email" size={20} color="black" />}
					placeholder="Enter email"
					onChange={f=>f}
					value={email}
					isRequired={true}
				/>
				<CustomInput 
					icon={<SimpleLineIcons name="lock" size={20} color="black" />}
					placeholder="Enter password"
					onChange={f=>f}
					secureTextEntry={true}
					value={password}
					isRequired={true}

				/>
				<CustomInput 
					icon={<SimpleLineIcons name="lock" size={20} color="black" />}
					placeholder="Confirm password"
					onChange={f=>f}
					secureTextEntry={true}
					value={confirmPassword}
					isRequired={true}

				/>
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
