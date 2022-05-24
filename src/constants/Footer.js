import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function Footer({ description, buttonText, onPress}) {
	return (
		<View style={styles.container}>
			<Text>{ description }</Text>
			<TouchableOpacity onPress={ onPress }>
				<Text>{ buttonText }</Text>
			</TouchableOpacity>
		</View>
	);
}

Footer.propTypes = {
	description: PropTypes.string,
	buttonText: PropTypes.string,
	onPress: PropTypes.func
};

const styles = StyleSheet.create({
	buttonText: {
		color: "#7292CF",
		backgroundColor: "red"
	}
});
