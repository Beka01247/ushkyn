import Header from '../../components/Header/Header'
import Math_window from './math_window/math_window'
import Results_window from './results-window/results-window'
import "./home.css"
import Footer from '../../components/Footer/Footer'

export default function Home() {
return(
    <div className='container-home'>
        <div> 
            <Header/>
        </div>

        <div className='container-centered'>
            <Math_window/>
            <Results_window/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
)
}