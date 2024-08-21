import React, { createContext, useState } from 'react';

// Crear el contexto
const TokenContext = createContext();

// Crear un proveedor del contexto
export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState("");

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    );
};

export default TokenContext;
