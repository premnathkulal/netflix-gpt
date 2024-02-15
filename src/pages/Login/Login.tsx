import Button from '../../components/Button/Button';
import InputBox from '../../components/InputBox/InputBox';
import './Login.scss';

const Login = () => {
    return (
        <div className="login-page">
            <div className="auth-form">
                <div className="form-header">Sign In</div>
                <div className="form-body">
                    <form onSubmit={e => e.preventDefault()} className="form">
                        <InputBox />
                        <InputBox />
                        <InputBox />
                        <Button />
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
                        <div className="sign-up-option">
                            New to Netflix? <span>Sign up now</span>
                        </div>
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


