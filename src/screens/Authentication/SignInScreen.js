import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView  } from "react-native";
import { Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import CustomInput from "../../constants/CustomInput";
import Header from "../../constants/Header";
import RegistrationContainer from "../../containers/RegistrationContainer";
import CustomButton from "../../constants/CustomButton";
import Footer from "../../constants/Footer";
import GlobalContext, { useGlobalContext } from "../../../GlobalContext";

export default function SignInScreen({ navigation }) {
	const { authContext } = useGlobalContext();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = authContext.signIn;

	const handleSignIn = () => {
		signIn({ email, password});
		alert("loging in", email, password);
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
						onChangeText={email => setEmail(email)}
						isRequired={true}
						value={email}
					/>
					<CustomInput 
						icon={<SimpleLineIcons name="lock" size={20} color="black" />}
						placeholder="Enter password"
						onChange={f=>f}
						secureTextEntry={true}
						value={password}
						isRequired={true}

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
