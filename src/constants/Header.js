import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import RoundAvatar from "./RoundAvatar";

export default function Header({ children, heading, description, avatarUrl, display=false }) {
	return (
		<View style={styles.container}>
			<View style={{flexDirection: "row", justifyContent: "space-between"}}> 
				<View>
					<Text style={styles.heading}>{heading}</Text>
					<Text style={styles.description}>{description}</Text>
				</View>
				{display &&
					<RoundAvatar 
						style={styles.headerAvatar}
						imageUrl={avatarUrl}
					/>
				}
			</View>

			<View>
				{/* other properties of the header go here */}
				{children}
			</View>
		</View>
	);
}

Header.propTypes = {
	children: PropTypes.node,
	heading: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	avatarUrl: PropTypes.string,
	styles: PropTypes.object,
};

const styles = StyleSheet.create({
	container: {
		//marginLeft: 20,
		margin: 10
	},
	heading: {
		fontSize: 34,
		color: "rgba(255, 255, 255, 1)",  
	},
	description: {
		color: "rgba(255, 255, 255, 1)",  
		fontSize: 20
	},
	headerAvatar: {
		backgroundColor: "pink",
		width: 50,
		height: 50,
		borderRadius: 50
		
	}
});
