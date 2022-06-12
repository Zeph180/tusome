import React, { useState } from "react";
import { View, Text, StyleSheet } from  "react-native";
import RoundedButton from "./RoundedButton";
import PropTypes from "prop-types";

export default function RadioButton({ data, onSelect}) {
	const [userClass, setUserClass] = useState(null);

	const selectHandler = (value) => {
		onSelect(value);
		setUserClass(value);
	};

	return (
		<View style={styles.container}>
			{data.map((item, i ) => {
				return (
					<RoundedButton
						key={i}
						onPress={() => selectHandler(item.value)}
						styles={item.value === userClass ? 
							styles.containerActive :
							styles.containerNotActive
						}
					>
						<Text style={styles.inactiveBtnText}>{item.value}</Text>
					</RoundedButton>

				);
			})}
		</View>
	);
}

RadioButton.propTypes = ({
	data: PropTypes.array.isRequired,
	onSelect: PropTypes.func,
});

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
		marginBottom: 20
	},
	containerActive: {
		backgroundColor: "rgba(86, 204, 242, 1)",
		width: 67,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		margin: 5
	},
	activeBtnText: {
		color: "white",
		fontSize: 15,
		alignContent: "center"
	},
	containerNotActive: {
		backgroundColor: "#FFFFFF",
		width: 67,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		margin: 5
	},
	inactiveBtnText: {
		fontSize: 15,
		alignContent: "center"
	},
});
