import React from "react";
import { Image, TouchableOpacity } from "react-native";
import {  } from "react-native-web";

export default function RoundAvatar({ style, imageUrl, handleImagePress }) {
	return (
		<TouchableOpacity 
			onPress={handleImagePress}>
			<Image 
				onp
				style={style}
				source={{
					uri:imageUrl,
				}}
			/>
		</TouchableOpacity>
	);
}
