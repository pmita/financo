import { useState, useEffect } from 'react'
//FIREBASE
import { projectAuth } from '../firebase/config'
//HOOKs
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(null);
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)
  
    try {
      // login
      const res = await projectAuth.signInWithEmailAndPassword(email, password)

      console.log(isCancelled);
      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

        if(!isCancelled){
            setIsPending(false)
            setError(null)
        }
        console.log(isCancelled);
    } 
    catch(err) {
        if(!isCancelled){
            setError(err.message)
            setIsPending(false)
        }
    }
  }

  useEffect(() => {
    //Need to set the state to false withing useEffect
    //else clean up function runs immediatelly - React V18
    setIsCancelled(false);

    return () => {
        setIsCancelled(true);
    }
  }, []);


  return { isPending, error, login }
}