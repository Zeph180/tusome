import React, { useState } from "react";
import { View, Text } from "react-native";
import DropDownBtn from "../../constants/DropDownBtn";
import Header from "../../constants/Header";
import RadioButton from "../../constants/RadioButton";
import RegistrationContainer from "../../containers/RegistrationContainer";

export default function SecondRegistrationScreen() {
	const [options, setOptions] = useState(null);
	//user class is gotten from options

	const data = [
		{value: "P1"},
		{value: "P2"},
		{value: "P3"},
		{value: "P4"},
		{value: "P5"}
	];

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
				<DropDownBtn 
					buttonText="Primary"
					onPress={f=>f}
				/>
				<View>
					<RadioButton 
						data={data}
						onSelect={(value) => setOptions(value)}
					/>
				</View>
				<Text>{options}</Text>
			</View>
		</RegistrationContainer>
	);
}
