import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function DropDownBtn({ buttonText, onPress, ...props }) {
	return (
		<TouchableOpacity 
			onPress={onPress}
			style={[styles.btnActive]}
			{...props}
		>
			<Text style={styles.btnText}>{ buttonText}</Text>
			<View style={{ marginTop: 3 }}>
				<EvilIcons 
					name="arrow-down" 
					size={20}
					color= "rgba(54, 206, 244, 1)" />
			</View>
		</TouchableOpacity>

	);
}

DropDownBtn.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	btnActive: {
		borderColor: "rgba(54, 206, 244, 1)",
		borderWidth: 2,
		width: 86,
		height: 26,
		justifyContent: "space-evenly",
		paddingLeft: 2,
		borderRadius: 5,
		flexDirection: "row"

	},
	btnInactive: {
		borderColor: "rgba(54, 206, 244, 1)",
		borderWidth: 2,
		width: 86,
		height: 26,
		justifyContent: "space-evenly",
		paddingLeft: 2,
		borderRadius: 5,
		flexDirection: "row"

	},
	btnText: {
		fontSize: 16,
		color: "rgba(54, 206, 244, 1)",
	}
});