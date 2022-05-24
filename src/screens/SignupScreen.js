import React from "react";
import { View, Text } from "react-native";
import CustomInput from "../constants/CustomInput";
import Footer from "../constants/Footer";
import RegistrationContainer from "../containers/RegistrationContainer";
import { Fontisto } from "@expo/vector-icons";

export default function SignupScreen() {
	return (
		<RegistrationContainer
			footer={
				<Footer 
					description="Already have an account?"
					buttonText="Sign in"
					onPress={f=>f}
				/>
			}
		>
			<View>
				<Text>Hello signup</Text>
			</View>
			<View>
				<CustomInput 
					icon={<Fontisto name="email" size={24} color="black" />}
					placeholder="Enter first name"
					onChange={f=>f}
				/>
			</View>
		</RegistrationContainer>
	);
}
