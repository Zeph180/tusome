import React  from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import RegistrationContainer from "../containers/RegistrationContainer";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { useGlobalContext } from "../../GlobalContext";
import ProfileInput from "../constants/ProfileInputs";
import ProfileHeader from "../constants/ProfileHeader";

const ProfileCard = ({ user, onCameraPress }) => {
	return (
		<View style={styles.profileCardContainer}>
			<View style={{flexDirection: "row"}}>
				<Image 
					source={user.avatar}
					style={styles.userPic}
				/>
				<View style={{paddingTop: 5, paddingLeft: 10}}>
					<Text style={styles.userName}>{user.firstName + " " + user.secondName}</Text>
					<Text style={styles.classDetails}>{user.class} | {user.registrationNumber}</Text>
				</View>

			</View>
			<TouchableOpacity onPress={onCameraPress}>
				<EvilIcons 
					name="camera"
					size={30}
					color="black"
				/>
			</TouchableOpacity>
		</View>
	);
};

export default function ProfileScreen() {
	const { user } = useGlobalContext();
	console.log(user);


	return (
		<RegistrationContainer
			header={
				<ProfileHeader 
					screenName="My Profile"
					btnAction="Done"
					rightBtnPress={f=>f}
					leftBtnPress={f=>f}
				/>
			}
		>
			<ScrollView>
				<ProfileCard 
					user={user}
				/>
				<View style={{ flexWrap: "wrap", flexDirection: "row", flex: 1}}>
					<View style={styles.narrowInput}>
						<ProfileInput 
							label="Students Number"
						/>
					</View>
					<View style={styles.narrowInput}>
						<ProfileInput 
							label="Academic Year"
						/>
					</View>
					<View style={styles.narrowInput}>
						<ProfileInput 
							label="Registered Class"
						/>
					</View>
						
					<View style={styles.narrowInput}>
						<ProfileInput 
							label="Joining Date"
						/>
					</View>
				</View>
				<ProfileInput 
					label="Parent Email"
				/>
				<ProfileInput 
					label="Mother's Name"
				/>
				<ProfileInput 
					label="Father's Name"
				/>
				<ProfileInput 
					label="Address"
				/>
			</ScrollView>
		</RegistrationContainer>
	);  
}

ProfileCard.propTypes ={
	user: PropTypes.object,
};

const styles = StyleSheet.create({
	yearBtn: {
		backgroundColor: "white",
		width: 80,
		alignItems: "center",
		borderRadius: 10,
		marginTop: 5,
	},
	profileCardContainer: {
		justifyContent: "space-between",
		flexDirection: "row",
		padding: 10,
		borderColor: "#5278C1",
		borderRadius: 10,
		borderWidth: 1,
		margin: 10,
		marginBottom: 15
	},
	userPic: {
		backgroundColor: "pink",
		height: 60,
		width: 60,
		borderRadius: 10
	},
	userName: {
		fontWeight: "bold",
		fontSize: 20,
	},
	narrowInput: {
		width: "50%"
	}
});
