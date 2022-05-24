import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

export default function Header({ children, heading, description }) {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>{heading}</Text>
			<Text style={styles.description}>{description}</Text>
			<View>
				{/* other properties of the header go here */}
				{children}
			</View>
		</View>
	);
}

Header.propTypes = {
	children: PropTypes.node,
	heading: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
	container: {
		//marginLeft: 20,
		margin: 10
	},
	heading: {
		fontSize: 34,
		color: "rgba(255, 255, 255, 1)",  
	},
	description: {
		color: "rgba(255, 255, 255, 1)",  
		fontSize: 20
	}
});
