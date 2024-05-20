import "./LoginStyle.css"

export default function Login () {
    return (
        <div className="LoginForm">
            <div className="UserLogin">
                <form>
                    <input type="tel" className="phoneInput" name="phone" placeholder="+7" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                </form>
            </div>
        </div>
    )
}