import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export const useLogIn = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const LogIn = async (phone, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch ('http://localhost:4000/api/user/login', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({phone, password})
        })
        const json = await response.json()

        if (!response.ok){
            setIsLoading(false)
            setError(json.error)
            console.log('doesnt exist')
            console.log(error)
        }
        if (response.ok){   
            // save the user to localstorage
            localStorage.setItem('user', JSON.stringify(json))

            //update the authcontext
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }
    return { LogIn, isLoading, error} 
}