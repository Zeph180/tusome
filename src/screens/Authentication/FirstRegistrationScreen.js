/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import RegistrationContainer from "../../containers/RegistrationContainer";
import Header from "../../constants/Header";
import CustomInput from "../../constants/CustomInput";
import CustomButton from "../../constants/CustomButton";

export default function FirstRegistrationScreen({navigation}) {
	const [firstName, setFirstName] = useState("");
	const [secondName, setSecondName] = useState("");
	const [school, setSchool] = useState("");

	const handleNext = () => {
		navigation.navigate("SecondRegistration");
	};

	return (
		<RegistrationContainer
			header={
				<Header 
					heading="Tusome"
					description="Almost done"
					hasPaperPlane={true}
				>
				</Header>
			}
		>
			<SafeAreaView style={{alignContent: "center"}}>
				<CustomInput 
					placeholder="Enter first name"
					isRequired={true}
					onChange={f=>f}
					value={firstName}
				/>
				<CustomInput 
					placeholder="Enter second name"
					isRequired={true}
					onChange={f=>f}
					value={secondName}
				/>
				<CustomInput 
					placeholder="Which school do you go to?"
					isRequired={true}
					onChange={f=>f}
					value={school}
				/>
			</SafeAreaView> 
			<View style={styles.btnContainer}>
				<CustomButton 
					btnText="Next"
					onPress={handleNext}
				/>
			</View>
		</RegistrationContainer>
	);
}


const styles = StyleSheet.create({
	btnContainer: {
		alignItems: "center",
		margin: 20,
	}
});
