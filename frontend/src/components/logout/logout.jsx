import { Button } from "antd"
import { useLogOut } from "../../hooks/useLogOut"

export const Logout = () => {
    const {logout} = useLogOut()

    const handleClick = () => {
        logout()
    }
    
    return(
        <Button onClick={handleClick}/>
    )
}