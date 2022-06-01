import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextInput, View, StyleSheet, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";


export default function ProfileInput({ onChange, keyboardType,value, isRequired, label }) {
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
				onChangeText={onChange}
				keyboardType={keyboardType}
				value={value}
				isRequired={isRequired}
				style={styles.textInput}
				onBlur={onBlur}
				onFocus={onFocus}
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
	onChange: PropTypes.func.isRequired,
	icon: PropTypes.object,
	keyboardType: PropTypes.string,
	secureTextEntry: PropTypes.bool,
	value: PropTypes.any,
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
	}
});