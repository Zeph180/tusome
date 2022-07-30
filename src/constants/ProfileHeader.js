import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { AntDesign } from "@expo/vector-icons";
import RoundedButton from "./RoundedButton";

export default function ProfileHeader({showRightBtn, screenName, btnAction, leftBtnPress, rightBtnPress}) {	return (
	<View style={styles.container}>
		<RoundedButton styles={styles.leftBtn} onPress={leftBtnPress}>
			<AntDesign 
				name="left" 
				size={28} 
				color="white" 
			/>
			<Text style={styles.btnText}>{screenName}</Text>
		</RoundedButton>
		{
			showRightBtn && 
				<RoundedButton style={styles.rightBtn} onPress={rightBtnPress}>
					<Text style={styles.btnText}>{btnAction}</Text>
				</RoundedButton>
		}
	</View>
);
}

ProfileHeader.propTypes = {
	screenName: PropTypes.string,
	btnAction: PropTypes.string,
	leftBtnPress: PropTypes.func,
	rightBtnPress: PropTypes.func,
	showRightBtn: PropTypes.bool
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		marginHorizontal: 5,
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