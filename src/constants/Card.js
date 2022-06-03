import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import RoundAvatar from "./RoundAvatar";


export default function Card({ onPress, cardTitle, imageUrl }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<RoundAvatar 
				imageUrl={imageUrl}
				style={styles.cardImage}
			/>
			<Text style={styles.cardTitle}>{cardTitle}</Text>
		</TouchableOpacity>
	);
}


Card.propTypes = {
	onPress: PropTypes.func.isRequired,
	cardTitle: PropTypes.string.isRequired,
	imageUrl: PropTypes.string,
	style: PropTypes.object,
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(245, 246, 252, 1)",
		width: "40%",
		height: 132,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		marginHorizontal: "5%",
		marginVertical: 10
	},
	cardImage: {
		width: 64,
		height: 64,
		backfaceVisibility: "visible",
		backgroundColor: "pink"
	},
	cardTitle: {
		fontSize: 16,
		marginTop: 10,
	}
});