import "./Registration.css"
import Logo from "../../../../components/Logo/Logo"
import Login from "./Login"
import Password from "./Password"
import Button from "./Button"

export default function Registration (){
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
            <div className="LoginText">
                <h2> Жүйеге кіру </h2>
            </div>
            
            <div><Login/></div>
            
            <div className="LoginText">
                <h2> Құпия сөз </h2>
            </div>

            <div><Password/></div>
            <Button/>

            <div className="ForgotPassword">
                <a> Құпия сөзді ұмыттым </a>
            </div>


        

            


        </div>
    )
}