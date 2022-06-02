import React from "react";
import { ScrollView } from "react-native";
import { useGlobalContext } from "../../GlobalContext";
import BookCard from "../constants/BookCard";
import ProfileHeader from "../constants/ProfileHeader";
import RegistrationContainer from "../containers/RegistrationContainer";


export default function BooksScreen({navigation}) {
	const { user } = useGlobalContext();

	const handleGoBack = () => {
		navigation.goBack();
	};

	return (
		<RegistrationContainer
			header={
				<ProfileHeader 
					screenName="E-Books"
					leftBtnPress={handleGoBack}
				/>
			}
		>
			<ScrollView>
				<BookCard user={user}/>
				<BookCard user={user}/>
				<BookCard user={user}/>
				<BookCard user={user}/>
			</ScrollView>
		</RegistrationContainer>
	);
}
