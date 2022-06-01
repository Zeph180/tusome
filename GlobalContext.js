import React, { createContext, useState, useContext } from "react";
import userData from "./dummy/user.json";
import dashData from "./dummy/dashData.json" 
import PropTypes from "prop-types";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

export default function GlobalContext({ children }) {
	const [user, setUser] = useState(userData);
    const [dashBdBtns, setdasbBdBtns] = useState(dashData);
	return (
		<AppContext.Provider value={{ user, setUser, dashBdBtns }}>
			{children}
		</AppContext.Provider>
	);
}

GlobalContext.propTypes = ({
	children: PropTypes.node,
});