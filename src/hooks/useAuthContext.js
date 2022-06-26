//CONTEXT
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    //STATE
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('useAuthContext must be used within AuthContextProvider scope!')
    }

    return context;
}