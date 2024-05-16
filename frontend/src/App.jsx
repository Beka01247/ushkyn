// import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Registration from "./components/Registration/Registration"
import "./App.css"

export default function App() {

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
