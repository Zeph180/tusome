import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function RegistrationContainer({ children, footer, header, ...props }) {
	return (
		<LinearGradient 
		//background linear gradient
			colors={["rgba(40, 85, 174, 1)", "rgba(114, 146, 207, 1)"]}
			style={styles.container}
		>
			<View>{ header }</View>
			<View style={styles.inputArea} props={props}>
				<View>{ children }</View>
				<View>{ footer }</View>
			</View>
		</LinearGradient>
	);
}

RegistrationContainer.propTypes = {
	children: PropTypes.node.isRequired,
	footer: PropTypes.node.isRequired,
	header: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	inputArea: {
		marginTop: 10,
		backgroundColor: "rgba(255, 255, 255, 1)",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		flex: 2,
	}
});
