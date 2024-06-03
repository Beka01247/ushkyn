import { Button } from "@mantine/core"
import { useLogOut } from "../../hooks/useLogOut"

export const Logout = () => {
    const {logout} = useLogOut()

    const handleClick = () => {
        logout()
    }
    
    return(
        <Button onClick={handleClick}> 
            Шығу
        </Button>
    )
}