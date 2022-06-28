import { useEffect, useState } from 'react';
//FIREBASE
import { projectAuth } from '../firebase/config';
//HOOKS
import { useAuthContext } from './useAuthContext';

export const useLogOut = () => {
    //STATE & VARIABLES
    const [isCancelled, setIsCancelled] = useState(false);
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

            if(!isCancelled){
                setIsPending(false);
                setIsPending(null);
            }
        }catch(err){
            if(!isCancelled){
                setError(err.message);
                setIsPending(false);
                console.log(err.message);
            }
        }
    }

    useEffect(() => {
        //return a clean up function
        return () => setIsCancelled(true);
    }, []);

    //RETURN
    return { error, isPending, logout };
}