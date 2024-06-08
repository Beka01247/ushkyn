import { useLogIn } from "../../../hooks/useLogIn"
import "./LoginStyle.css"
import { useState} from "react"
import Button from "./Button"
import { Alert } from "@mantine/core"

export default function LoginInput () {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const {LogIn, isLoading, error} = useLogIn();

    const handleSubmit = async (e) => {
        e.preventDefault()

        await LogIn(phone, password)
    }

    return (
        <div className="LoginForm">
            <div>   
                <form className="UserLogin" id='loginForm' onSubmit={handleSubmit}>
                    <h2> Жүйеге кіру </h2>
                    <input type="tel"
                    id='tel'  
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    className="phoneInput" 
                    name="phone" 
                    placeholder="+7" 
                    />
                    <h2> Құпия сөз </h2>
                    <input type="password"  
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="passwordInput" 
                    name="password" 
                    />
                    <Button disabled={isLoading} />
                </form>
                {error && <Alert 
                            message={error} 
                            type="error" 
                            closable 
                            style={{ marginTop: '20px' }} />}
            </div>
        </div>
    )
}