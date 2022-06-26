/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return { ...state, user: action.payload };
        default:
            return state;
    }
        
}

export const AuthContextProvider = ({ children }) => {
    //STATE & VARIABLE
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });

    return(
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}