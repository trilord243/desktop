import React, { createContext, useState } from 'react';

// Crear el contexto
const TokenContext = createContext();

// Crear un proveedor del contexto
export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState("");
    const [name, setName] = useState("");

    return (
        <TokenContext.Provider value={{ token, setToken,name,setName }}>
            {children}
        </TokenContext.Provider>
    );
};

export default TokenContext;
