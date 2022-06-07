import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignInScreen from "../screens/Authentication/SignInScreen";
import SignupScreen from "../screens/Authentication/SignupScreen";
import FirstRegistrationScreen from "../screens/Authentication/FirstRegistrationScreen";
import SecondRegistrationScreen from "../screens/Authentication/SecondRegistrationScreen";

const Stack = createNativeStackNavigator();

export default function AuthenticationNavigator() {
    
	return (
		<Stack.Navigator>
			<Stack.Screen 
				options={()=>({
					headerShown: false,
				})}
				name="Sign In"
				component={SignInScreen}
			/>
			<Stack.Screen
				options={() => ({
					headerShown: false,
				})}
				name="Signup"
				component={SignupScreen}
			/>
			<Stack.Screen
				options={() => ({
					headerShown: false
				})}
				name="FirstRegistration"
				component={FirstRegistrationScreen}
			/>
			<Stack.Screen
				options={() => ({
					headerShown: false
				})}
				name="SecondRegistration"
				component={SecondRegistrationScreen}
			/>
		</Stack.Navigator>
	);
}