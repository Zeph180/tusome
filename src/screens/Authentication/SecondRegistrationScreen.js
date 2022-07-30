import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Header from "../../constants/Header";
import RegistrationContainer from "../../containers/RegistrationContainer";
import DropDownPicker from "react-native-dropdown-picker";

export default function SecondRegistrationScreen({navigation}) {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [items, setItems] = useState([
		{label: "Primary one", value: "Primary one"},
		{label: "Primary two", value: "Primary two"},
		{label: "Primary three", value: "Primary three"},
		{label: "Primary four", value: "Primary four"},
		{label: "Primary five", value: "Primary five"},
		{label: "Primary six", value: "Primary six"},
		{label: "Primary seven", value: "Primary seven"},
	]);

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

			<DropDownPicker 
				style={{ width: "95%", marginHorizontal: 10 }}
				open={open}
				items={items}
				value={value}
				setOpen={setOpen}
				setValue={setValue}
				setItems={setItems}
				placeholder="Select your class"
			/>

		</RegistrationContainer>
	);
}
