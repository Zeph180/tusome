import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { useGlobalContext } from "../../GlobalContext";
import Card from "../constants/Card";
import Header from "../constants/Header";
import RoundedButton from "../constants/RoundedButton";
import RegistrationContainer from "../containers/RegistrationContainer";

// import PropTypes from "prop-types";

export default function HomeScreen({ navigation }) {
	const { user } = useGlobalContext();
	const handleAvatar = () => {
		navigation.navigate("Profile",);
	};

	const handleBooksNav = () => {
		navigation.navigate("Books");
	};

	const handleSubjectsNav = () => {
		navigation.navigate("Subjects");
	};

	return (
		<ScrollView>
			<RegistrationContainer
				header={
					<Header 
						heading = {user.firstName}
						description={user.class + " " + user.registrationNumber}
						avatarUrl={user.avatar}
						display={true}
						handleAvatarPress={handleAvatar}
					>
						<RoundedButton
							styles={styles.yearBtn}
						>
							<Text>{ user. registrationYear + "-" + user.registrationExpires }</Text>
						</RoundedButton>
					
					</Header>
				}
			>
				<View style={styles.cardContainer}>
					<Card cardTitle="My subjects" onPress={handleSubjectsNav}/>
					<Card cardTitle="E-books" onPress={handleBooksNav}/>
					<Card cardTitle="Quiz"/>
					<Card cardTitle="Announcements"/>
					<Card cardTitle="Discussions"/>
					<Card cardTitle="Results"/>
					<Card cardTitle="About us"/>
					<Card cardTitle="Change password"/>
					<Card cardTitle="Logout"/>
				</View>
			</RegistrationContainer>
		</ScrollView>

	);
}

// HomeScreen.propTypes = {
// };

const styles = StyleSheet.create({
	yearBtn: {
		backgroundColor: "white",
		width: 80,
		alignItems: "center",
		borderRadius: 10,
		marginTop: 5,
	},
	cardContainer: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap"
	},
	cardItem: {
		width: "50%"
	}
});