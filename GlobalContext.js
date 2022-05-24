import React, { createContext, useState } from 'react';
import userData from "./data.json"

const AppContext = createContext()

export default function GlobalContext({ children }) {
    const [user, setUser] = useState(userData)
    
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
};
