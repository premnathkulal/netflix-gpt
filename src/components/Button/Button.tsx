import './Button.scss'

interface ButtonProps {
    text: string
    theme?: string
    padding?: string
    fontSize?: string
    clickHandler: () => void
}

const Button = (props: ButtonProps) => {
    const { text, padding, clickHandler } = props

    const handleClick = () => {
        clickHandler()
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
