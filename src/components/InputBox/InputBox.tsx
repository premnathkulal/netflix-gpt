import './InputBox.scss'

const InputBox = () => {
    return (
        <div className="input-box">
            <input className="text-box" type="text" placeholder="Name" />
            <p className="text-hint">Please enter name</p>
        </div>
    )
}

export default InputBox
