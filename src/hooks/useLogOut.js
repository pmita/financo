import { useEffect, useState } from 'react';
//FIREBASE
import { projectAuth } from '../firebase/config';
//HOOKS
import { useAuthContext } from './useAuthContext';

export const useLogOut = () => {
    //STATE & VARIABLES
    const [isCancelled, setIsCancelled] = useState(null);
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
        //Need to set the state to false withing useEffect
        //else clean up function runs immediatelly - React V18
        setIsCancelled(false);

        return () => {
            setIsCancelled(true)
        }
    }, []);

    //RETURN
    return { error, isPending, logout };
}