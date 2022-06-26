import { useState } from 'react';
//FIREBASE
import { projectAuth } from '../firebase/config';

export const useSignUp = () => {
    //STATE & VARIABLES
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(null);

    //FUNCTIONS
    const signup = async (email, password, displayName) => {
        //reset state before sign up method
        setError(null);
        setIsPending(true)

        try{
            //init request in a try-catch block since its an async request
            //createUser method returns us a response
            //response contains details about the user we just created
           const response = await projectAuth.createUserWithEmailAndPassword(email, password);
           console.log(response);

           //if we don't get a response, our request has failed
           if(!response){
            throw new Error('Could not compolete sign up');
           }

           //If we reach this line, user has signup successfully
           //we can now update the user name
           await response.user.updateProfile({
            displayName: displayName
           });

           //reset state after success
           setIsPending(false);
           setError(null);
        }catch(err){
            //If our request fails, collect the reason why
            setError(err.message);
            setIsPending(false);
            console.log(err.message);
        }
    }

    //RETURNS
    return { error, isPending, signup };
}