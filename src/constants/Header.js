import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import RoundAvatar from "./RoundAvatar";
import PaperPlaneSvg from "../../assets/vectors/PaperPlaneSvg";
import LoginSvg from "../../assets/vectors/LoginSvg";

export default function Header({ children, heading, description, hasAvatar, hasPaperPlane=false, isOnLogin=false, avatarUrl, showLoginSvg, handleAvatarPress }) {
	return (
		<View style={styles.container}>
			{ showLoginSvg &&
				<View style={styles.loginSvg}>
					<LoginSvg width={"90%"} height={70}/>
				</View>
			}
			<View style={{flexDirection: "row", justifyContent: "space-between"}}> 
				<View style={{
					alignItems: isOnLogin ? "center" : "flex-start",
					marginHorizontal: isOnLogin ? "15%" : null
				}}>
					<Text style={styles.heading}>{heading}</Text>
					<Text style={styles.description}>{description}</Text>
				</View>
				{/* {hasPaperPlane 
					?
					<View style={styles.paperPlane}>
						<PaperPlaneSvg width={200} height={50}/>
					</View> 
					:
					<RoundAvatar 
						style={styles.headerAvatar}
						imageUrl={avatarUrl}
						handleImagePress={handleAvatarPress}
					/>
				} */}
				{hasPaperPlane &&
					<View style={styles.paperPlane}>
						<PaperPlaneSvg width={200} height={50}/>
					</View>
				}
				{hasAvatar && 
					<RoundAvatar 
						style={styles.headerAvatar}
						imageUrl={avatarUrl}
						handleImagePress={handleAvatarPress}
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
	display: PropTypes.bool,
	handleAvatarPress: PropTypes.func,
	hasPaperPlane: PropTypes.bool,
	isOnLogin: PropTypes.bool,
	hasAvatar:PropTypes.bool,

};

const styles = StyleSheet.create({
	container: {
		//marginLeft: 20,
		margin: 10,
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
	},
	loginDec: {
		justifyContent: "center",
		alignContent: "center",
		backgroundColor: "red"
	},
	loginSvg: {
		height: 70,
		marginTop: "5%",
		marginBottom: "20%",
		justifyContent: "center"
	},
	paperPlane: {
		width: 50,
		height: 30,
		marginTop: "8%",
		marginRight: "5%"
	}
});
