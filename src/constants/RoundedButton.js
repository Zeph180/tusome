import React from "react";
import { TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";

export default function RoundedButton({ children, onPress, styles }) {
	return (
		<View>
			<TouchableOpacity style={styles} onPress={onPress}>
				{children}
			</TouchableOpacity>
		</View>
	);
}

RoundedButton.propTypes = {
	children: PropTypes.node,
	onPress: PropTypes.func,
	styles: PropTypes.object
};