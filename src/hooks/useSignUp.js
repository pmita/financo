import { useState } from 'react';
//FIREBASE
import { projectAuth } from '../firebase/config';
//HOOKS
import { useAuthContext } from '../hooks/useAuthContext';

export const useSignUp = () => {
    //STATE & VARIABLES
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

           //reset state after success
           setIsPending(false);
           setError(null);
        }catch(err){
            setError(err.message);
            setIsPending(false);
            console.log(err.message);
        }
    }

    //RETURNS
    return { error, isPending, signup };
}