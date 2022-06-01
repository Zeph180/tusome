import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import RoundedButton from "./RoundedButton";

export default function ProfileHeader({screenName, btnAction, leftBtnPress, rightBtnPress}) {
	return (
		<View style={styles.container}>
			<RoundedButton styles={styles.leftBtn} onPress={leftBtnPress}>
				<AntDesign 
					name="left" 
					size={28} 
					color="white" 
				/>
				<Text style={styles.btnText}>{screenName}</Text>
			</RoundedButton>

			<RoundedButton style={styles.rightBtn} onPress={rightBtnPress}>
				<Text style={styles.btnText}>{btnAction}</Text>
			</RoundedButton>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
		marginHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	leftBtn: {
		flexDirection: "row"
	},
	btnText: {
		fontSize: 20,
		paddingLeft: 5,
		color: "white"
	}
});