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
import DropDownPicker from "react-native-dropdown-picker";
import { Width } from "../../constants/CustomInput";
import * as SecureStore from "expo-secure-store";

const SETUP_ACCOUNT = gql`
	mutation setupaccount($setupAccountId: ID!, $firstName: String!, $secondName: String!, $school: String!, $grade: String!) {
		setupAccount(id: $setupAccountId, firstName: $firstName, secondName: $secondName, school: $school, grade: $grade) {
			email
			id
		}
	}
`; 

export default function FirstRegistrationScreen({navigation}) {
	const [firstName, setFirstName] = useState();
	const [secondName, setSecondName] = useState();
	const [school, setSchool] = useState();
	const [userId, setUserId] = useState();
	const [userToken, setUserToken] = useState(null);
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [grade, setGrade] = useState(null);
	const [items, setItems] = useState([
		{label: "Primary one", value: "Primary one"},
		{label: "Primary two", value: "Primary two"},
		{label: "Primary three", value: "Primary three"},
		{label: "Primary four", value: "Primary four"},
		{label: "Primary five", value: "Primary five"},
		{label: "Primary six", value: "Primary six"},
		{label: "Primary seven", value: "Primary seven"},
	]);

	const[setupaccount , { loading, error }] = useMutation(SETUP_ACCOUNT, {
		variables: {
			firstName: firstName,
			secondName: secondName,
			school: school,
			setupAccountId: userId,
			grade: grade
		},
		onCompleted: data => {
			alert(data);
			console.log(data);
			console.log(data.user);
			console.error(userId);
			navigation.navigate("Home");
		}, 
		onError : error => {
			console.log(error);
			console.error(error);
		}
	});
	const handleNext = () => {
		SecureStore.getItemAsync("userToken").then((userToken)=> setUserToken(userToken));
		SecureStore.getItemAsync("userId").then((userId)=> setUserId(userId));
		console.log("user token:", userToken);
		console.log("userId: ",userId);
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
				<DropDownPicker 
					style={styles.dropDownPicker}
					open={open}
					items={items}
					value={value}
					setOpen={setOpen}
					setValue={setValue}
					setItems={setItems}
					placeholder="Select your class"
					placeholderStyle={{
						color: "grey"
					}}
					onSelectItem={item => setGrade(item.value)}
					dropDownDirection="TOP"
					dropDownContainerStyle={{
						width: "91.5%",
						marginLeft: 15,
						borderColor: "#E0E0E0"
					}}
				/>
			</SafeAreaView> 
			<View style={styles.btnContainer}>
				<CustomButton 
					btnText="Next"
					onPress={handleNext}
				/>
			</View>
			<View >
				<SchoolToolsSvg />
			</View>
		</RegistrationContainer>
	);
}


const styles = StyleSheet.create({
	btnContainer: {
		alignItems: "center",
		margin: 30,
	},
	dropDownPicker: {
		borderColor: "#E0E0E0",
		borderRadius: 4,
		borderWidth: 2,
		height: 46,
		marginLeft: "4%",
		width: "91.5%",
		padding: 10,
		marginTop: 30
	}
});
