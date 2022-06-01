import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { useGlobalContext } from "../../GlobalContext";
import Card from "../constants/Card";
import Header from "../constants/Header";
import RoundedButton from "../constants/RoundedButton";
import RegistrationContainer from "../containers/RegistrationContainer";

// import PropTypes from "prop-types";

export default function HomeScreen({ navigation }) {
	const { user, dashBdBtns } = useGlobalContext();
	const handleAvatar = () => {
		navigation.navigate("Profile",);
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
					<Card cardTitle="My subjects"/>
					<Card cardTitle="Assignments"/>
					<Card cardTitle="Quiz"/>
					<Card cardTitle="Announcements"/>
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