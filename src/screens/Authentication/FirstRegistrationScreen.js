/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import RegistrationContainer from "../../containers/RegistrationContainer";
import SchoolToolsSvg from "../../../assets/vectors/SchoolToolsSvg";
import Header from "../../constants/Header";
import CustomInput from "../../constants/CustomInput";
import CustomButton from "../../constants/CustomButton";
import { useMutation, gql } from "@apollo/client";

const SETUP_ACCOUNT = gql`
	mutation setupaccount($setupAccountId: ID!, $firstName: String!, $secondName: String!, $school: String!) {
		setupAccount(id: $setupAccountId, firstName: $firstName, secondName: $secondName, school: $school) {
			firstName
			secondName
			email
			school
			id
		}
	}
`; 
export default function FirstRegistrationScreen({navigation}) {
	const [firstName, setFirstName] = useState();
	const [secondName, setSecondName] = useState();
	const [school, setSchool] = useState();
	
	const[setupaccount , { loading, error }] = useMutation(SETUP_ACCOUNT, {
		variables: {
			firstName: firstName,
			secondName: secondName,
			school:school
		},
		onCompleted: data => {
			alert(data);
			console.log(data.user);
		}, 
		onError : error => {
			console.log(error);
			console.error(error);
		}
	});

	const handleNext = () => {
		setupaccount();
		
		// navigation.navigate("SecondRegistration");
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
					onChangeText={text => setFirstName(text) }
					value={firstName}
					type="text"
				/>
				<CustomInput 
					placeholder="Enter second name"
					isRequired={true}
					onChangeText={text => setSecondName(text)}
					value={secondName}
					type="text"
				/>
				<CustomInput 
					placeholder="Which school do you go to?"
					isRequired={true}
					onChangeText={text => setSchool(text)}
					value={school}
					type="text"
				/>
			</SafeAreaView> 
			<View style={styles.btnContainer}>
				<CustomButton 
					btnText="Next"
					onPress={handleNext}
				/>
			</View>
			<View style={{marginTop: "17%"}}>
				<SchoolToolsSvg />
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
