import { forwardRef } from 'react'
import './InputBox.scss'

export type RefType = HTMLInputElement

interface InputBoxProps {
    errorMessage?: string
}

const InputBox = forwardRef<RefType, InputBoxProps>((props, ref) => {
    const { errorMessage } = props

    return (
        <div className="input-box">
            <input
                className="text-box"
                type="text"
                placeholder="Name"
                ref={ref}
            />
            <div className="text-hint">
                {errorMessage}
            </div>
        </div>
    )
})

export default InputBox
