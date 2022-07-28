import React from "react";
import { ScrollView, Text } from "react-native";
import { useGlobalContext } from "../../GlobalContext";
import BooksList from "../constants/BookCard";
import ProfileHeader from "../constants/ProfileHeader";
import RegistrationContainer from "../containers/RegistrationContainer";
import { useQuery, gql } from "@apollo/client";

//storing query as a variable
const GET_BOOKS = gql`
	query getBooks{
		books {
			subject
			title
			author
			edition
		}
	}
`;

export default function BooksScreen({navigation}) {
	const { user } = useGlobalContext();
	const { data, loading, error } = useQuery(GET_BOOKS);

	if (loading) {
		return <Text>Loading......</Text>; 
	}

	if (error) {
		console.error(error);
		return <Text>Error................</Text>;
	}
	if (data) {
		console.log(data);
	}

	//const books = user.books;
	
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
				<BooksList navigation={navigation} books={data.books}/>
			</ScrollView>
		</RegistrationContainer>
	);
}
