import "./ButtonStyle.css";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

export default function Button({disabled}) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // navigate('/home');  
    };

    return (
        <div className="button">
            <button
            disabled={disabled} 
            form='loginForm' 
            type="submit" 
            onClick={handleButtonClick}>
                КІРУ
            </button>
        </div>
    );
}
