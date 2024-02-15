import Button from '../../components/Button/Button';
import InputBox from '../../components/InputBox/InputBox';
import './Login.scss';

const Login = () => {
    return (
        <div className="login-page">
            <div className="auth-form">
                <div className="form-header">Sign In</div>
                <div className="body">
                    <form onSubmit={e => e.preventDefault()} className="form">
                        <InputBox />
                        <InputBox />
                        <InputBox />
                        <Button />
                    </form>
                </div>
                <div className="form-footer"></div>
            </div>
        </div>
    )
}

export default Login


