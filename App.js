import React, { useState, useEffect, useMemo, useContext } from "react";
import { StatusBar } from "react-native";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./src/navigation/index";
import AuthenticationNavigator from "./src/navigation/Authentication";
import GlobalContext, { useGlobalContext } from "./GlobalContext";

const Navigation = () => {
	const { state, dispatch } = useGlobalContext();

	useEffect(() => {
		//fetching token from storage
		const bootsAsync = async ()=> {
			let userToken;
			try {
				userToken = await SecureStore.getItemAsync("userToken");
				console.log("token:",userToken);
			} catch {
				//Restoring token failed
			}
			dispatch({ type: "RESTORE_TOKEN", token: userToken});
		};
		bootsAsync();

	}, []);

	return (
		<>
			{
				state.userToken == null ? <RootStackNavigator /> : <AuthenticationNavigator />
			}
		</>
	);
};



export default function App() {
	return (
		<NavigationContainer>
			<GlobalContext>
				<StatusBar />
				<Navigation />
			</GlobalContext>
		</NavigationContainer>
	);
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
