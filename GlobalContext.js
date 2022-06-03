import React, { createContext, useState, useContext } from "react";
import userData from "./dummy/user.json";
import PropTypes from "prop-types";
import userBooks from "./dummy/books.json"

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

export default function GlobalContext({ children }) {
	const [user, setUser] = useState(userData);
	const [books, setBooks] = useState(userBooks);

	return (
		<AppContext.Provider value={{ user, setUser, books }}>
			{children}
		</AppContext.Provider>
	);
}

GlobalContext.propTypes = ({
	children: PropTypes.node,
});