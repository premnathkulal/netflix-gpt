import './Login.scss';
import { ElementRef, useRef, useState } from 'react';
import Button from '../../components/Button/Button';
import InputBox from '../../components/InputBox/InputBox';
import { UserValues, validateForm } from '../../utils/form-validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../utils/firebase-config'
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/slices/user-slice';

const Login = () => {
    const dispatch = useDispatch()
    const [isLoginForm, setIsLoginForm] = useState<boolean>(true)
    const [btnText, setBtnText] = useState<string>('Sign In')
    const name = useRef<ElementRef<typeof InputBox>>(null);
    const email = useRef<ElementRef<typeof InputBox>>(null);
    const password = useRef<ElementRef<typeof InputBox>>(null);
    const [authError, setAuthError] = useState<boolean>(false)
    const [userInfo, setUserInfo] = useState({
        name: {
            value: '',
            error: ''
        },
        email: {
            value: '',
            error: ''
        },
        password: {
            value: '',
            error: ''
        }
    })

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm)
        !isLoginForm ? setBtnText('Sign In') : setBtnText('Sign Up')
    }

    const authClickHandler = () => {
        const userValues: UserValues = {
            name: name.current?.value ?? '',
            email: email.current?.value ?? '',
            password: password.current?.value ?? '',
        }
        const [validationData, isValid] = validateForm(userValues)
        setUserInfo(prevValues => ({ ...prevValues, ...validationData }))

        if (!isValid) return

        if (!isLoginForm) {
            signUp(userValues.name, userValues.email, userValues.password)
        }
        else {
            signIn(userValues.email, userValues.password)
        }
    }

    const signUp = (name: string, email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const updatedUser = auth.currentUser;
                if (updatedUser)
                    updateProfile(updatedUser, {
                        displayName: name, photoURL: "https://picsum.photos/200"
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = updatedUser
                        dispatch(addUser({ uid, email, displayName, photoURL }))
                    }).catch(() => {
                        setAuthError(true)
                    });

                setAuthError(false)
            })
            .catch(() => {
                setAuthError(true)
            });
    }

    const signIn = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setAuthError(false)
            })
            .catch(() => {
                setAuthError(true)
            });
    }

    return (
        <div className="login-page">
            <div className="auth-form">
                <div className="form-header">{isLoginForm ? 'Sign In' : 'Sign Up'}</div>
                <div className="form-body">
                    <form onSubmit={e => e.preventDefault()} className="form">
                        {
                            !isLoginForm &&
                            <InputBox ref={name} placeHolder="Name" error={userInfo.name.error} />
                        }
                        <InputBox ref={email} type="email" placeHolder="Email" error={userInfo.email.error} />
                        <InputBox ref={password} type="password" placeHolder="Password" error={userInfo.password.error} />
                        <Button text={btnText} padding="1" clickHandler={authClickHandler} />
                        {authError && <span className="auth-error">Invalid Information</span>}
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


