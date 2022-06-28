import { useState, useEffect } from 'react';
//FIREBASE
import { projectAuth } from '../firebase/config';
//HOOKS
import { useAuthContext } from '../hooks/useAuthContext';

export const useSignUp = () => {
    //STATE & VARIABLES
    const [isCancelled, setIsCancelled] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const { dispatch } = useAuthContext();

    //FUNCTIONS
    const signup = async (email, password, displayName) => {
        //reset state before sign up method
        setError(null);
        setIsPending(true)

        try{
           const response = await projectAuth.createUserWithEmailAndPassword(email, password);

           if(!response){
            throw new Error('Could not compolete sign up');
           }

           await response.user.updateProfile({
            displayName: displayName
           });

           //dispatch login action!!
            dispatch({ type: 'LOGIN', payload: response.user})

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

        return () => setIsCancelled(true);
    }, []);

    //RETURNS
    return { error, isPending, signup };
}