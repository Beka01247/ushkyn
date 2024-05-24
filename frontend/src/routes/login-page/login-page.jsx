// import Header from "./components/Header/Header"
import Footer from "../../components/Footer/Footer"
import "./login-page.css"
import LoginWindow from "./components/LoginWindow"

export default function Login_page() {

  return (
    <div>
      <main>
        <div className="RegDiv">
          <LoginWindow></LoginWindow> 
          
        </div> 
      </main>
      <Footer/>
    </div>

  )
}