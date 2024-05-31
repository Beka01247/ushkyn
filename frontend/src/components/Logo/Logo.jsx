import logo from './LOGO 1.svg'
import "./Logo.css"

export default function Logo(){
    return (
        <div className="logo">
            <img className='mainLogo' src= {logo}/>  
        </div> 
    )
}