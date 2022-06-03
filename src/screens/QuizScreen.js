import React from "react";
import { Text } from "react-native";
import ProfileHeader from "../constants/ProfileHeader";
import RegistrationContainer from "../containers/RegistrationContainer";

export default function QuizScreen({ navigation }) {
	const handleGoBack = () => {
		navigation.goBack();
	};
	return (
		<RegistrationContainer
			header={
				<ProfileHeader 
					screenName="Quiz"
					leftBtnPress={handleGoBack}
				/>
			}>
			<Text>Quiz Screen</Text>
		</RegistrationContainer>
	);
}
