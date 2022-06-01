import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextInput, View, StyleSheet, Text } from "react-native";


export default function ProfileInput({ onChangeText, editable, keyboardType,value, isRequired, label }) {
	const [isFocused, setIsFocused] = useState(false);
    


	const onBlur = () => {
		setIsFocused(false);
	};

	const onFocus = () => {
		setIsFocused(true);
	}; 

	return (
		<View style={styles.container}>
			<TextInput 
				onChangeText={onChangeText}
				keyboardType={keyboardType}
				value={value}
				isRequired={isRequired}
				style={styles.textInput}
				onBlur={onBlur}
				onFocus={onFocus}
				editable={editable}
			/>

			<View style={[
				styles.labelContainer, 
				{top: isFocused ? -6 : 15}
			]}>
				<Text style={[
					styles.label,
					{
						fontSize: isFocused ? 14 : 16,
						color: isFocused ? "rgba(50, 54, 67, 1)" : "rgba(165, 165, 165, 1)"
					}
                        
				]}>{label}</Text>
			</View>
		</View>
	);
}

ProfileInput.propTypes = {
	placeholder: PropTypes.string.isRequired,
	onChangeText: PropTypes.func.isRequired,
	icon: PropTypes.object,
	keyboardType: PropTypes.string,
	secureTextEntry: PropTypes.bool,
	value: PropTypes.any,
	isRequired: PropTypes.bool,
	label: PropTypes.string,
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 20
	},
	textInput: {
		borderBottomColor: "rgba(165, 165, 165, 1)",
		borderBottomWidth: 2,
		marginHorizontal: 20,
		marginTop: 20,
	},
	labelContainer: {
		position: "absolute",
		left: 15,
		marginLeft: 5
	},
	label: {
		fontSize: 12,
	},
	formReady: {
		color: "rgba(50, 54, 67, 1)",
		fontSize: 14,
	}
});