import { useNavigate } from 'react-router-dom';
import './Button.scss'

interface ButtonProps {
    text: string
    theme?: string
    padding?: string
    fontSize?: string
}

const Button = (props: ButtonProps) => {
    const { text, padding } = props
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/auth')
    }

    return (
        <button
            className="button"
            onClick={handleClick}
            style={{ padding: `${padding}rem` }}
        >
            {text}
        </button>
    )
}

export default Button
