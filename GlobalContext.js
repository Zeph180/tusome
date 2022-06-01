import React, { createContext, useState, useContext } from "react";
import userData from "./dummy/user.json";
import PropTypes from "prop-types";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

export default function GlobalContext({ children }) {
	const [user, setUser] = useState(userData);
	return (
		<AppContext.Provider value={{ user, setUser }}>
			{children}
		</AppContext.Provider>
	);
}

GlobalContext.propTypes = ({
	children: PropTypes.node,
});