import "./ButtonStyle.css"
import { useNavigate } from 'react-router-dom';

export default function Button (){

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/home');
    };

    return (
        <div className="button">
            <button onClick={handleButtonClick}>
            КІРУ
            </button>
        </div>
    )
}