import Logo from "../Logo/Logo"
import userlogo from './assets/user.png'
import downarrow from './assets/down-arrow.png'
import './Header.css'
import { useAuthContext } from "../../hooks/useAuthContext"
import { Logout } from "../logout/logout"

export default function Header() {

    const{user} = useAuthContext()
    return (
        <header>
            <div className="container-header">
                <div className="logo">
                    <Logo/>
                </div>
                
                <div className="user">
                    <div className="userlogo">
                        <img src= {userlogo}/>
                    </div>
                    {user && (
                    <div className="username">
                        <p>{user.phone}</p>
                        <Logout/>
                    </div>
                    )}
                    <div className="userlogo">
                        <img src= {downarrow}/>
                    </div>
                </div>

            </div>
        </header>
    )
}