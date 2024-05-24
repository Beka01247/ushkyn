import { useContext } from "react"
import { AuthContext } from "../context/authContext"

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('use authcontext must be inside an auth context provider')
    }

    return context
}