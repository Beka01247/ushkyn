// import Header from "./components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Registration from "./components/Registration/Registration"
import "./login-page.css"

export default function Login_page() {
  return (
    <div>
      <main>
        <div className="RegDiv">
          <Registration/> 
        </div> 
      </main>
      <Footer/>
    </div>

  )
}