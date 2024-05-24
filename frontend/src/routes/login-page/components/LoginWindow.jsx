import "./LoginWindow.css"
import Logo from "../../../components/Logo/Logo"
import LoginInput from "../components/LoginInput"

export default function LoginWindow (){
    return (
        <div className='RegistrationDiv'>
            <div>
                <Logo />
            </div>
            <div>
                <h1 className="Greetings">
                    Қош келдіңіз!
                </h1>
            </div>
            <hr></hr>
            
            <div><LoginInput/></div>

            <div className="ForgotPassword">
                <a> Құпия сөзді ұмыттым </a>
            </div>
        </div>
    )
}