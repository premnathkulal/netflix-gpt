import './Button.scss';

interface ButtonProps {
    text: string;
    theme?: string;
    padding?: string;
    fontSize?: string;
    width?: string;
    textColor?: string;
    bacgroundColor?: string;
    clickHandler: () => void;
}

const Button = (props: ButtonProps) => {
    const { text, padding, width, textColor, bacgroundColor, clickHandler } =
        props;

    const handleClick = () => {
        clickHandler();
    };

    return (
        <button
            className="button"
            onClick={handleClick}
            style={{
                padding: `${padding}rem`,
                width: width,
                color: textColor,
                background: bacgroundColor,
            }}
        >
            {text}
        </button>
    );
};

export default Button;
