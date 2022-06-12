import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import CustomButton from "../../constants/CustomButton";
import DropDownBtn from "../../constants/DropDownBtn";
import Header from "../../constants/Header";
import RadioButton from "../../constants/RadioButton";
import RegistrationContainer from "../../containers/RegistrationContainer";

export default function SecondRegistrationScreen({navigation}) {
	const [isActive, setIsActive] = useState(false);
	const [showClasses, setShowClasses] = useState();
	
	//user class is gotten from options

	const data = [
		{value: "P1"},
		{value: "P2"},
		{value: "P3"},
		{value: "P4"},
		{value: "P5"}
	];

	const datam = [
		{value: "S1"},
		{value: "S2"},
		{value: "S3"},
		{value: "S4"},
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
				<Header
					heading="Tusome"
					description="A little more information"
					hasPaperPlane={true}
				/>
			}
		>
			<View>
				<View style={{alignItems: "center",}}>
					<Text style={{fontSize: 20 }}> Select your class </Text>		
				</View>
				
				<View>
					<DropDownBtn 
						buttonText="Primary"
						data={data}
						isActive={isActive}
						onPress={()=>{
							setIsActive(!isActive);
						}}
					/>

					<DropDownBtn
						buttonText="O-Level"
						data={datam}
						isActive={isActive}
						onPress={()=>{
							setIsActive(!isActive);
						}}
					/>

					<DropDownBtn 
						buttonText="A-Level"
						data={data}
						isActive={isActive}
						onPress={()=>{
							setIsActive(!isActive);
						}}
					/>
				</View>
			</View>
			<View style= {{alignItems: "center", marginTop: 20}}>
				<CustomButton 
					btnText="Submit"
					onPress={handleNextPress}
				/>
			</View>
		</RegistrationContainer>
	);
}
