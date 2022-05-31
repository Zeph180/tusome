import React  from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Header from "../constants/Header";
import RoundedButton from "../constants/RoundedButton";
import RegistrationContainer from "../containers/RegistrationContainer";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { useGlobalContext } from "../../GlobalContext";

const ProfileCard = ({ user }) => {
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
			<TouchableOpacity>
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
				<Header 
					description="My profile"	
				> 
					<RoundedButton styles={ styles.yearBtn } >
						<View style={{ flexDirection: "row", justifyContent: "space-between"}}>
							<Ionicons 
								name="md-checkmark-sharp"
								size={20}
								color="blue"
							/>
							<Text>Done</Text>
						</View>					
					</RoundedButton>
				</Header>
			}
		>
			<View>
				<ProfileCard 
					user={user}
				/>
			</View>
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
		margin: 10
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
	}
});
