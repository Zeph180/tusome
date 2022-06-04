import React, { useState }  from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import RegistrationContainer from "../containers/RegistrationContainer";
import { EvilIcons } from "@expo/vector-icons";
import { useGlobalContext } from "../../GlobalContext";
import ProfileInput from "../constants/ProfileInputs";
import ProfileHeader from "../constants/ProfileHeader";

const ProfileCard = ({ user, onCameraPress  }) => {
	return (
		<View style={styles.profileCardContainer}>
			<View style={{flexDirection: "row"}}>
				<Image 
					source={{ uri: "https://avatars.githubusercontent.com/u/58359456?s=400&u=8c8e74632c32bb57ed547a27e35476d383852f02&v=4"}}
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

export default function ProfileScreen({ navigation }) {
	const { user } = useGlobalContext();
	const [isLeftBtnClicked, setIsLeftBtnClicked] = useState(false);
	const [isEditable, setIsEditable] = useState(false);	

	const handleGoBack = () => {
		navigation.goBack();
	};

	return (
		<RegistrationContainer
			header={
				<ProfileHeader 
					screenName="My Profile"
					btnAction={isLeftBtnClicked ? "Done" : "Edit"}
					leftBtnPress={handleGoBack}
					rightBtnPress={() => {
						setIsLeftBtnClicked(!isLeftBtnClicked);
						setIsEditable(!isEditable);
						alert(isEditable);
					}}
				/>
			}
		>
			<ScrollView>
				<ProfileCard 
					user={user}
					onCameraPress={f=>f}
				/>
				<View style={{ flexWrap: "wrap", flexDirection: "row", flex: 1}}>
					<View style={styles.narrowInput}>
						<ProfileInput 
							label="Students Number"
							editable={isEditable}
							onChangeText={f=>f}
						/>
					</View>
					<View style={styles.narrowInput}>
						<ProfileInput 
							label="Academic Year"
							editable={isEditable}
							onChangeText={f=>f}

						/>
					</View>
					<View style={styles.narrowInput}>
						<ProfileInput 
							label="Registered Class"
							editable={isEditable}
							onChangeText={f=>f}

						/>
					</View>
						
					<View style={styles.narrowInput}>
						<ProfileInput 
							label="Joining Date"
							editable={isEditable}
							onChangeText={f=>f}

						/>
					</View>
				</View>
				<ProfileInput 
					label="Parent Email"
					editable={isEditable}
					onChangeText={f=>f}

				/>
				<ProfileInput 
					label="Mother's Name"
					editable={isEditable}
					onChangeText={f=>f}

				/>
				<ProfileInput 
					label="Father's Name"
					editable={isEditable}
					onChangeText={f=>f}

				/>
				<ProfileInput 
					label="Address"
					editable={isEditable}
					onChangeText={f=>f}

				/>
			</ScrollView>
		</RegistrationContainer>
	);  
}

ProfileCard.propTypes ={
	user: PropTypes.object,
	onCameraPress: PropTypes.func,
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
		borderRadius: 10,
		resizeMode: "contain"
	},
	userName: {
		fontWeight: "bold",
		fontSize: 20,
	},
	narrowInput: {
		width: "50%"
	}
});
