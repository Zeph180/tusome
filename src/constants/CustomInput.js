import React from "react";
import { TextInput, StyleSheet, Dimensions, View} from "react-native";
import PropTypes from "prop-types";

const Width = Dimensions.get("screen").width;

export default function CustomInput({ placeholder, onChange, icon }) {
	return (
		<View  style={styles.textInput}>
			{icon}
			<View>
				<TextInput 
					placeholder={placeholder}
					onChange={onChange}
					icon={icon}
				/>
			</View>
			{icon}
		</View>
	);
}

CustomInput.propTypes = {
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	leftIcon: PropTypes.string,
	rightIcon: PropTypes.string,
};

const styles = StyleSheet.create({
	textInput: {
		borderColor: "#E0E0E0",
		borderRadius: 4,
		borderWidth: 2,
		width: Width-30,
		height: 46,
		justifyContent: "space-between",
		flexDirection: "row",
		padding: 10,
		margin: 10
	}
});
