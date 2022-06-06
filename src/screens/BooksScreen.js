import React from "react";
import { ScrollView } from "react-native";
import { useGlobalContext } from "../../GlobalContext";
import BooksList from "../constants/BookCard";
import ProfileHeader from "../constants/ProfileHeader";
import RegistrationContainer from "../containers/RegistrationContainer";


export default function BooksScreen({navigation}) {
	const { user } = useGlobalContext();
	const books = user.books;
	
	const handleGoBack = () => {
		navigation.goBack();
	};

	const handleReadBtn = () =>{
		navigation.navigate("Book Reader");
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
				<BooksList books={books}/>
			</ScrollView>
		</RegistrationContainer>
	);
}
