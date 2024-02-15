import { useState } from 'react';
import Button from '../../components/Button/Button';
import InputBox from '../../components/InputBox/InputBox';
import './Login.scss';

const Login = () => {
    const [isLoginForm, setIsLoginForm] = useState<boolean>(true)
    const [btnText, setBtnText] = useState<string>('Sign In')

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm)
        !isLoginForm ? setBtnText('Sign In') : setBtnText('Sign Up')
    }

    return (
        <div className="login-page">
            <div className="auth-form">
                <div className="form-header">{isLoginForm ? 'Sign In' : 'Sign Up'}</div>
                <div className="form-body">
                    <form onSubmit={e => e.preventDefault()} className="form">
                        {!isLoginForm && <InputBox />}
                        <InputBox />
                        <InputBox />
                        <Button text={btnText} padding="1" />
                    </form>
                    <div className="auth-helper">
                        <div className="remember-me">
                            Remember me
                        </div>
                        <div className="need-help">
                            Need help?
                        </div>
                    </div>
                    <div className="auth-options">
                        {
                            isLoginForm ?
                                <div className="sign-up-option">
                                    New to Netflix? <span onClick={toggleForm}>Sign up now</span>
                                </div> :
                                <div className="sign-up-option">
                                    Already have account? <span onClick={toggleForm}>Sign In now</span>
                                </div>
                        }
                        <div className="auth-note">
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more.</span>
                        </div>
                    </div>
                </div>
                <div className="form-footer"></div>
            </div>
        </div>
    )
}

export default Login


