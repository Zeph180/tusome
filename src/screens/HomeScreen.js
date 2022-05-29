import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useGlobalContext } from "../../GlobalContext";
import Header from "../constants/Header";
import RoundAvatar from "../constants/RoundAvatar";
import RoundedButton from "../constants/RoundedButton";
import RegistrationContainer from "../containers/RegistrationContainer";

// import PropTypes from "prop-types";

export default function HomeScreen({ navigation }) {
	const { user } = useGlobalContext();

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
		marginTop: 5
	},


});