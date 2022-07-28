import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./src/navigation/index";
import AuthenticationNavigator from "./src/navigation/Authentication";
import GlobalContext, { useGlobalContext } from "./GlobalContext";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "apollo-link-context";
// import {API_URI} from "react-native-dotenv";
//exp://192.168.43.176:19000
const uri = "http://192.168.43.176:4000/api";
//172.20.5.188:
const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri });

const authLink = setContext(async (_, { Headers }) => {
	return {
		headers: {
			authorization: (await SecureStore.getItemAsync("userToken")) || ""
		}
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache,
	connectToDevTools: true,
});

const Navigation = () => {
	const { state, dispatch } = useGlobalContext();
	useEffect(() => {
		//fetching token from storage
		const bootsAsync = async ()=> {
			let userToken;
			try {
				//checking for token from user device storage
				userToken = await SecureStore.getItemAsync("userToken");
				console.log("2: ",userToken);
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
				state.userToken === null ? <AuthenticationNavigator /> : <RootStackNavigator />
			}
		</>
	);
};



export default function App() {
	return (
		<ApolloProvider client={client}>
			<NavigationContainer>
				<GlobalContext>
					<StatusBar backgroundColor="rgba(40, 85, 174, 1)"/>
					<Navigation />
				</GlobalContext>
			</NavigationContainer>
		</ApolloProvider>
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
