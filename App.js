import React, { useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./src/navigation/index";
import AuthenticationNavigator from "./src/navigation/Authentication";
import GlobalContext from "./GlobalContext";

const Navigation = () => {
	const [token, setToken] = useState(false);
	return (
		<>
			{
				token == true ? <RootStackNavigator /> : <AuthenticationNavigator />
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
