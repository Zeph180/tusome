import React from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

export default function RoundedButton({ children, onPress, styles }) {
	return (
		<TouchableOpacity style={styles} onPress={onPress}>
			{children}
		</TouchableOpacity>
	);
}

RoundedButton.propTypes = {
	children: PropTypes.node,
	onPress: PropTypes.func,
	styles: PropTypes.object
};