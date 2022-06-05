import React, { useState } from "react";
import {View } from "react-native";
import ProfileHeader from "../../constants/ProfileHeader";
import RegistrationContainer from "../../containers/RegistrationContainer";
import CustomInput from "../../constants/CustomInput";
import { SimpleLineIcons } from "@expo/vector-icons";
import CustomButton from "../../constants/CustomButton";
import LogoutSvg from "../../../assets/vectors/LogoutSvg";
import SchoolToolsSvg from "../../../assets/vectors/SchoolToolsSvg";

export default function ChangePasswordScreen({ navigation }) {
	const [password, setPassword] = useState("");
	const [newPassword, setnewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPasword] = useState("");

	const handleGoBack = () => {
		navigation.goBack();
	};

	return (
		<RegistrationContainer
			header={
				<ProfileHeader 
					screenName="Change Password"
					leftBtnPress={handleGoBack}
				/>
			}
		>
			<View>
				<CustomInput 
					icon={<SimpleLineIcons name="lock" size={20} color="black" />}
					placeholder="Enter Old Password"
					onChange={f=>f}
					secureTextEntry={true}
					value={password}
					isRequired={true}
				/>
				<CustomInput 
					icon={<SimpleLineIcons name="lock" size={20} color="black" />}
					placeholder="Enter New Password"
					onChange={f=>f}
					secureTextEntry={true}
					value={newPassword}
					isRequired={true}
				/>
				<CustomInput 
					icon={<SimpleLineIcons name="lock" size={20} color="black" />}
					placeholder="Confirm New Password"
					onChange={f=>f}
					secureTextEntry={true}
					value={confirmNewPassword}
					isRequired={true}
				/>
			</View>
			<View style={{ alignItems: "center", marginTop: 20}}>
				<CustomButton btnText="Confirm" onPress={f=>f}/>
			</View>
			<View style={{marginTop: "34%"}}>
				<SchoolToolsSvg />
			</View>
		</RegistrationContainer>
	);
}
