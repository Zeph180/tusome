import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function RootStackNavigator() {
	return (
		<Stack.Navigator>
			{/* <Stack.Screen
				options={() => ({
					headerShown: false,
				})}
				name="Home"
				component={HomeScreen}
			/>
			<Stack.Screen name="Login" component={LoginScreen} /> */}
			<Stack.Screen
				options={() => ({
					headerShown: false,
				})}
				name="Signup"
				component={SignupScreen}
			/>
			<Stack.Screen 
				options={() => ({
					headerShown: false,
				})}
				name="Profile"
				component={ProfileScreen}
			/>
		</Stack.Navigator>
	);
}
