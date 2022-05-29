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
					description="Form 6 arts | F19/0191"
				>
					<View style={{justifyContent:"space-between", flexDirection: "row"}}>
						<RoundedButton
							styles={styles.yearBtn}
						>
							<Text>2019-2022</Text>
						</RoundedButton>
						<RoundAvatar 
							style={styles.image}
							imageUrl={user.avatar} />
					</View>
				</Header>
			}
		>
			<RoundAvatar 
				imageUrl={user.avatar}
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
		marginTop: 5
	},
	image: {
		backgroundColor: "pink",
		width: 50,
		height: 50,
		borderRadius: 50
	}

});