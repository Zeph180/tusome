import React from "react";
import { SafeAreaView } from "react-native";
import CustomInput from "../constants/CustomInput";
import Footer from "../constants/Footer";
import RegistrationContainer from "../containers/RegistrationContainer";
import { Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import Header from "../constants/Header";
import CustomButton from "../constants/CustomButton";
import { View, StyleSheet } from "react-native";
//import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignupScreen() {
	return (
		<RegistrationContainer
			header={
				<Header 
					heading="Tusome"
					description="Let`s set your account" 
				/>
			}
			footer={
				<Footer 
					description="Already have an account?"
					buttonText="Sign in"
					onPress={f=>f}
				/>
			}

		>
			<SafeAreaView>
				<CustomInput 
					icon={<SimpleLineIcons name="phone" size={20} color="black" />}
					placeholder="Enter phone"
					onChange={f=>f}
				/>

				<CustomInput 
					icon={<Fontisto name="email" size={20} color="black" />}
					placeholder="Enter email"
					onChange={f=>f}
				/>
				<CustomInput 
					icon={<SimpleLineIcons name="lock" size={20} color="black" />}
					placeholder="Enter password"
					onChange={f=>f}
					secureTextEntry={true}
				/>
				<CustomInput 
					icon={<SimpleLineIcons name="lock" size={20} color="black" />}
					placeholder="Confirm password"
					onChange={f=>f}
					secureTextEntry={true}
				/>
			</SafeAreaView>
			<View style={styles.btnContainer}>
				<CustomButton 
					onPress={f=>f}
					btnText="SIGN UP"
				/>
			</View>
		</RegistrationContainer>
	);
}

const styles = StyleSheet.create({
	btnContainer: {
		alignItems: "center",
		margin: 20
	}
});
