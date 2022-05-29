import React from "react";
import { Image, View } from "react-native";

export default function RoundAvatar({ style, imageUrl }) {
	return (
		<View>
			<Image 
				style={style}
				source={{
					uri:imageUrl,
					width:62,
					height: 62
				}}
			/>
		</View>
	);
}
