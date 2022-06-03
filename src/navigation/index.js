import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SignupScreen from "../screens/Authentication/SignupScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FirstRegistrationScreen from "../screens/Authentication/FirstRegistrationScreen";
import SecondRegistrationScreen from "../screens/Authentication/SecondRegistrationScreen";
import BooksScreen from "../screens/BooksScreen";
import SubjectsScreen from "../screens/SubjectsScreen";
import DiscussionsScreen from "../screens/DiscussionsScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import SignInScreen from "../screens/Authentication/SignInScreen";
import ChangePasswordScreen from "../screens/Authentication/ChangePasswordScreen";
import QuizScreen from "../screens/QuizScreen";

const Stack = createNativeStackNavigator();

export default function RootStackNavigator() {
	return (
		<Stack.Navigator>
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
				name="Home"
				component={HomeScreen}
			/>
			<Stack.Screen 
				options={() => ({
					headerShown: false,
				})}
				name="Profile"
				component={ProfileScreen}
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
			<Stack.Screen 
				options={() => ({
					headerShown: false
				})}
				name="Books"
				component={BooksScreen}
			/>
			<Stack.Screen 
				options={()=> ({
					headerShown: false,
				})}
				name="Subjects"
				component={SubjectsScreen}
			/>
			<Stack.Screen 
				name="Discussions"
				component={DiscussionsScreen}
			/>
			<Stack.Screen 
				options={() => ({
					headerShown: false,
				})}
				name="About"
				component={AboutUsScreen}
			/>
			<Stack.Screen 
				options={() => ({
					headerShown: false,
				})}
				name="SignIn"
				component={SignInScreen}
			/>
			<Stack.Screen 
				options={() =>({
					headerShown: false
				})}
				name="Change Password"
				component={ChangePasswordScreen}
			/>
			<Stack.Screen 
				options={() =>({
					headerShown: false
				})}
				name="Quiz"
				component={QuizScreen}
			/>
		</Stack.Navigator>
	);
}
