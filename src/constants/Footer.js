import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function Footer({ description, buttonText, onPress}) {
	return (
		<View style={styles.container}>
			<Text style={styles.description}>{ description } </Text>
			<TouchableOpacity onPress={ onPress }>
				<Text style={styles.textBtn}>{ buttonText }</Text>
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
	container: {
		flexDirection: "row",
		marginHorizontal: "20%"
	},
	textBtn: {
		color: "rgba(114, 146, 207, 1)",
	},
	description: {

	}
});
