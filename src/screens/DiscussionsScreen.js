import React from "react";
import { Text, View } from "react-native";
import PasswordSvg from "../../assets/vectors/PasswordSvg";
import RegistrationContainer from "../containers/RegistrationContainer";
import Header from "../constants/Header";

export default function DiscussionsScreen(params) {
	return (
		<RegistrationContainer
			header={
				<Header 
					description="Discuss with felow Sudents abroad"
					heading="Discussion"
				/>
			}
		>
			<Text style={{ fontSize: 40, fontWeight: "bold"}}>COMING SOON</Text>
		</RegistrationContainer>
	);
}

