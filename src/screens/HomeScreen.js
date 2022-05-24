import React from "react";
import { Text, Button } from "react-native";
// import PropTypes from "prop-types";

export default function HomeScreen({ navigation }) {
	return (
		<>
			<Text>Home screen</Text>
			<Button
				title="to login"
				onPress={() => navigation.navigate("Login")}
			/>
		</>
	);
}

// HomeScreen.propTypes = {
// };
