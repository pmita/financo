import { useState } from 'react';
//FIREBASE
import { projectAuth } from '../firebase/config';
//HOOKS
import { useAuthContext } from './useAuthContext';

export const useLogOut = () => {
    //STATE & VARIABLES
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    //FUNCTIONS
    const logout = async () => {
        setError(null);
        setIsPending(true);

        try{
            await projectAuth.signOut()

            dispatch({ type: 'LOGOUT' });

            setIsPending(false);
            setIsPending(null)
        }catch(err){
            setError(err.message);
            setIsPending(false);
            console.log(err.message);
        }
    }

    //RETURN
    return { error, isPending, logout };
}