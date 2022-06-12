import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import RadioButton from "./RadioButton";

export default function DropDownBtn({
	buttonText,
	data,
	isActive,
	onPress,
	...props
}) {

	const [options, setOptions] = useState();

	return (
		<View style={styles.container}>
			<TouchableOpacity 
				onPress={onPress}
				style={isActive === true ? styles.btnActive : styles.btnInactive}
				{...props}
			>
				<Text style={isActive === true ? styles.btnTextActive : styles.btnTextInActive }>{buttonText}</Text>
				<View style={{ marginTop: 3 }}>
					{ isActive ?
						<EvilIcons 
							name="arrow-up" 
							size={20}
							color= "rgba(54, 206, 244, 1)" />
						:
						<EvilIcons 
							name="arrow-down" 
							size={20}
							color= "black" />}
				</View>
			</TouchableOpacity>
			{
				isActive ? (		
					<View style={styles.radioBtns}>
						<RadioButton 
							data={data}
							onSelect={(value) => setOptions(value)}
						/>
					</View>) : null
			}
		</View>
	);
}

DropDownBtn.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 10,
	},
	btnActive: {
		borderColor: "rgba(54, 206, 244, 1)",
		borderWidth: 2,
		width: 86,
		height: 26,
		justifyContent: "space-evenly",
		paddingLeft: 2,
		borderRadius: 5,
		flexDirection: "row",
		marginBottom: 5,
	},
	btnInactive: {
		borderColor: "black",
		borderWidth: 2,
		width: 86,
		height: 26,
		justifyContent: "space-evenly",
		paddingLeft: 2,
		borderRadius: 5,
		flexDirection: "row",
		marginVertical: 15,

	},
	btnTextActive: {
		fontSize: 16,
		color: "rgba(54, 206, 244, 1)",
	},
	btnTextInActive: {
		color: "black",
		fontSize: 16
	},
	radioBtns: {
		flexWrap: "wrap",
		flexDirection: "row"
	}
});