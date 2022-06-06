import React from "react";
import { TextInput, StyleSheet, Dimensions, View} from "react-native";
import PropTypes from "prop-types";

const Width = Dimensions.get("screen").width;

export default function CustomInput({ placeholder, isRequired, onChange, value, icon, keyboardType,secureTextEntry }) {
	return (
		<View style={{marginTop: 30, flexWrap:"wrap", paddingRight: 10}}>
			<View  style={styles.textInput}>
				<View style={{ paddingRight: 10 }}>{icon}</View>
				<View>
					<TextInput 
						placeholder={placeholder}
						onChange={onChange}
						icon={icon}
						keyboardType={keyboardType}
						secureTextEntry={secureTextEntry}
						value={value}
						isRequired={isRequired}
					/>
				</View>
			</View>
		</View>
	);
}

CustomInput.propTypes = {
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	icon: PropTypes.object,
	keyboardType: PropTypes.string,
	secureTextEntry: PropTypes.bool,
	value: PropTypes.any,
	isRequired: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
	textInput: {
		borderColor: "#E0E0E0",
		borderRadius: 4,
		borderWidth: 2,
		width: Width-30,
		height: 46,
		marginLeft: "4%",
		flexDirection: "row",
		padding: 10,
	},
});
