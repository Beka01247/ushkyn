import Logo from "../Logo/Logo"
import userlogo from './assets/user.png'
import downarrow from './assets/down-arrow.png'
import './Header.css'

export default function Header() {
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
                    <div className="username">
                        <p>Bekarys Serikov</p>
                    </div>
                    <div className="userlogo">
                        <img src= {downarrow}/>
                    </div>
                </div>

            </div>
        </header>
    )
}