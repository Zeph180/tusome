import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import AboutUsSvg from "../../assets/vectors/AboutUsSvg";
import BooksSvg from "../../assets/vectors/BooksSvg";
import DiscussionSvg from "../../assets/vectors/DiscussionSvg";
import LogoutSvg from "../../assets/vectors/LogoutSvg";
import PasswordSvg from "../../assets/vectors/PasswordSvg";
import QuizSvg from "../../assets/vectors/QuizSvg";
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

	const handleDiscussionsNav = () => {
		navigation.navigate("Discussions");
	};
	const handleAboutNav = () => {
		navigation.navigate("About");
	};
	const handleLogout = () => {
		navigation.navigate("SignIn");
	};
	const handleChangePasswordNav = () => {
		navigation.navigate("Change Password");
	};
	const handleQuizNav = () => {
		navigation.navigate("Quiz");
	};

	return (
		<ScrollView>
			<RegistrationContainer
				header={
					<Header 
						heading = {user.firstName}
						description={user.class + " " + user.registrationNumber}
						avatarUrl={"https://avatars.githubusercontent.com/u/58359456?s=400&u=8c8e74632c32bb57ed547a27e35476d383852f02&v=4"}
						display={true}
						handleAvatarPress={handleAvatar}
						hasAvatar={true}
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
					<Card svg={<QuizSvg width={50} height={50}/>} cardTitle="My subjects" onPress={handleSubjectsNav}/>
					<Card svg={<BooksSvg width={50} height={50}/>} cardTitle="E-books" onPress={handleBooksNav}/>
					<Card svg={<QuizSvg width={50} height={50}/>} cardTitle="Quiz" onPress={handleQuizNav}/>
					<Card svg={<DiscussionSvg width={50} height={50}/>} cardTitle="Discussions" onPress={handleDiscussionsNav}/>
					<Card svg={<AboutUsSvg width={50} height={50}/>} cardTitle="About us" onPress={handleAboutNav}/>
					<Card svg={<PasswordSvg width={50} height={50}/>} cardTitle="Change password" onPress={handleChangePasswordNav}/>
					<Card cardTitle="Logout" svg={<LogoutSvg width={40} height={40} />} onPress={handleLogout}/>
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