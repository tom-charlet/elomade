'use client'

import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children, data }) => {

    return <GlobalContext.Provider value={{
        ...data
    }}>
        {children}
    </GlobalContext.Provider>
}

export const useGlobal = () => useContext(GlobalContext);
