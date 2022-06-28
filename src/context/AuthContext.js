/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useReducer } from 'react';
//FIREBASE
import { projectAuth } from '../firebase/config';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return { ...state, user: action.payload };
        case 'LOGOUT':
            return { ...state, user: null };
        case 'AUTH_IS_READY':
            return { ...state, authIsReady: true, user: action.payload }
        default:
            return state;
    }      
}

export const AuthContextProvider = ({ children }) => {
    //STATE & VARIABLE
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false
    });
    console.log('AuthContext state: ', state);

    useEffect(() => {
        //Check if user is logged in on page load
        const unsubscribe = projectAuth.onAuthStateChanged((user) => {
            dispatch({ type: 'AUTH_IS_READY', payload: user })
        })

        //Clean-up function
        return () => unsubscribe();
    }, []);

    return(
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}