import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { useGlobalContext } from "../../GlobalContext";
import Card from "../constants/Card";
import Header from "../constants/Header";
import RoundedButton from "../constants/RoundedButton";
import RegistrationContainer from "../containers/RegistrationContainer";

// import PropTypes from "prop-types";

export default function HomeScreen({ navigation }) {
	const { user } = useGlobalContext();
	const dashBdBtns = [
		{
			btnImage: "../../assets/images/avatar.jpg",
			btnTitle: "My subjects"
		}, 
		{
			btnImage: "../../assets/images/avatar.jpg",
			btnTitle: "Assignments"
		},
		{
			btnImage: "../../assets/images/avatar.jpg",
			btnTitle: "Quiz"
		},
		{
			btnImage: "../../assets/images/avatar.jpg",
			btnTitle: "Announcements"
		},
		{
			btnImage: "../../assets/images/avatar.jpg",
			btnTitle: "Results"
		},
		{
			btnImage: "../../assets/images/avatar.jpg",
			btnTitle: "About us"
		},
		{
			btnImage: "../../assets/images/avatar.jpg",
			btnTitle: "Change password"
		},
		{
			btnImage: "../../assets/images/avatar.jpg",
			btnTitle: "Logout"
		}
	]; 

	return (
		<RegistrationContainer
			header={
				<Header 
					heading = {user.firstName}
					description={user.class + " " + user.registrationNumber}
					avatarUrl={user.avatar}
				>
					<View style={{justifyContent:"space-between", flexDirection: "row"}}>
						<RoundedButton
							styles={styles.yearBtn}
						>
							<Text>{ user. registrationYear + "-" + user.registrationExpires }</Text>
						</RoundedButton>
					
					</View>
				</Header>
			}
		>
			<Text>Dashboard</Text>
			<FlatList 
				data={dashBdBtns}
				renderItem={({item}) => <Card cardTitle={item.btnTitle} onPress={f => f }/>}
				numColumns={2}
			/>
		</RegistrationContainer>
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


});