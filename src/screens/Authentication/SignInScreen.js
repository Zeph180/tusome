import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import CustomInput from "../../constants/CustomInput";
import Header from "../../constants/Header";
import RegistrationContainer from "../../containers/RegistrationContainer";
import CustomButton from "../../constants/CustomButton";
import Footer from "../../constants/Footer";

export default function SignInScreen({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignIn = () => {
		navigation.navigate("Home");
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
			<View>
				<CustomInput 
					icon={<Fontisto name="email" size={20} color="black" />}
					placeholder="Enter email"
					onChange={f=>f}
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
		</RegistrationContainer>
	);
}
