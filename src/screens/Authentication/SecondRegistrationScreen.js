import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../constants/CustomButton";
import DropDownBtn from "../../constants/DropDownBtn";
import Header from "../../constants/Header";
import RadioButton from "../../constants/RadioButton";
import RegistrationContainer from "../../containers/RegistrationContainer";

export default function SecondRegistrationScreen({navigation}) {
	const [options, setOptions] = useState(null);
	const [showComponent, setShowComponent] = useState(false);
	const [grade, setGrade] = useState();
	//user class is gotten from options

	const data = [
		{value: "P1"},
		{value: "P2"},
		{value: "P3"},
		{value: "P4"},
		{value: "P5"}
	];

	const grades = [
		{value: "Primary"},
		{value: "O-level"},
		{value: "A-level"}
	];

	const handleNextPress = () => {
		navigation.navigate("Home");
	};

	return (
		<RegistrationContainer
			header={
				<Header h
					heading="Tusome"
					description="A little more information"
				/>
			}
		>
			<View>
				<View style={{alignItems: "center",}}>
					<Text style={{fontSize: 20 }}> Select your class </Text>		
				</View>
				<DropDownBtn 
					buttonText="Primary"
					onPress={() => {
						setShowComponent(!showComponent);
					}}
				/>
				{
					showComponent ? (		
						<View>
							<RadioButton 
								data={data}
								onSelect={(value) => setOptions(value)}
							/>
						</View>) : null
				}
			</View>
			<CustomButton 
				btnText="Submit"
				onPress={handleNextPress}
			/>
		</RegistrationContainer>
	);
}
