import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";

export default function RegistrationContainer({ children, footer, ...props }) {
	return (
		<View style={styles.container}>
			<View style={styles.inputArea} props={props}>
				<View>{ children }</View>
				<View>{ footer }</View>
			</View>
		</View>
	);
}

RegistrationContainer.propTypes = {
	children: PropTypes.node.isRequired,
	footer: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(40, 85, 174, 1)",
		flex: 1
	},
	inputArea: {
		marginTop: "30%",
		backgroundColor: "rgba(255, 255, 255, 1)",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		flex: 2,
		alignItems: "center"
	}
});
