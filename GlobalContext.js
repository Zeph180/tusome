import React, { createContext, useState, useContext, useMemo, useReducer } from "react";
import userData from "./dummy/user.json";
import PropTypes from "prop-types";

const AppContext = createContext();

const authReducer = (prevState, action) => {
	switch (action.type) {
	case "RESTORE_TOKEN":
		return {
			...prevState,
			userToken: action.token,
			isLoading: false
		};
	case "SIGN_IN": 
		return {
			...prevState,
			userToken: action.token,
			isLoading: false
		};
	case "SIGN_UP":
		return {
			...prevState,
			isSignOut: true,
			userToken: action.token
		};
	}
	
};

export const useGlobalContext = () => useContext(AppContext);

export default function GlobalContext({ children }) {
	const [user, setUser] = useState(userData);

	const [state, dispatch] = useReducer( authReducer, {
		isLoading: true,
		isSignOut: false,
		userToken: null
	}
	);

	const authContext = useMemo(
		() => ({
			signIn: async () => {
				dispatch({ type: "SIGN_IN", token: "dummy-auth-token"});
			},

			signOut: () => dispatch({ type: "SIGN_OUT"}),

			signUp: async () => {
				dispatch({ type: "SIGN_UP", token: "dummy-auth-context"});
			}
		})
	);
	
	return (
		<AppContext.Provider value={{ user, setUser, state, dispatch, authContext }}>
			{children}
		</AppContext.Provider>
	);
}

GlobalContext.propTypes = ({
	children: PropTypes.node,
});