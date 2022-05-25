import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";


export default function CustomButton({ btnText, onPress }) {
	return (
		<View >
			<LinearGradient 
				//background linear gradient
				colors={["rgba(40, 85, 174, 1)", "rgba(114, 146, 207, 1)"]}
				style={styles.container}
			>
				<TouchableOpacity onPress={onPress}>
					<Text style={styles.btnText}>{btnText}</Text>
				</TouchableOpacity>
			</LinearGradient>
		</View>
	);
}

CustomButton.propTypes = {
	btnText: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(40, 85, 174, 1)",
		width: 100,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5
	},
	btnText: {
		color: "white"
	}
});
