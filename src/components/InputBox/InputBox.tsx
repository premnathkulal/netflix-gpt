import { forwardRef } from 'react'
import './InputBox.scss'

export type RefType = HTMLInputElement

interface InputBoxProps {
    type?: string
    error?: string
    placeHolder: string
}

const InputBox = forwardRef<RefType, InputBoxProps>((props, ref) => {
    const { error, type, placeHolder } = props

    return (
        <div className="input-box">
            <input
                className="text-box"
                type={type}
                placeholder={placeHolder}
                ref={ref}
            />
            <div className="text-hint">
                {error}
            </div>
        </div>
    )
})

export default InputBox
