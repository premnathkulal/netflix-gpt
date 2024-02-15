import { useNavigate } from 'react-router-dom';
import './Button.scss'

const Button = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/auth')
    }

    return (
        <button className="button" onClick={handleClick}>
            Sign In
        </button>
    )
}

export default Button
