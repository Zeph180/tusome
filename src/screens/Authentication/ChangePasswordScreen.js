import React, { useState } from "react";
import ProfileHeader from "../../constants/ProfileHeader";
import RegistrationContainer from "../../containers/RegistrationContainer";
import CustomInput from "../../constants/CustomInput";
import { SimpleLineIcons } from "@expo/vector-icons";

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
		</RegistrationContainer>
	);
}
