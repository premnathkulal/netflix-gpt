import { useEffect, useState } from 'react'
import netflixLog from '../../assets/netflix-logo.png'
import Button from '../Button/Button'
import './Header.scss'
import { auth } from '../../utils/firebase-config';
import { signOut } from 'firebase/auth';
import userIcon from '../../assets/user-icon.jpg'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/app-store';

const Header = () => {
    const userStore = useSelector((store: RootState) => store.user)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        handleLoginState()
    }, [userStore])

    const handleLoginState = () => {
        if (userStore.uid) {
            setIsLoggedIn(true)
            return
        }
        setIsLoggedIn(false)
    }

    const clickHandler = () => {
        signOutUser()
    }

    const signOutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch(() => {
            //
        });
    }

    return (
        <div className="header">
            <div className="brand-icon">
                <img src={netflixLog} alt="logo" />
            </div>

            <div className="header-actions">
                {
                    isLoggedIn &&
                    <div className="user-info">
                        {<img src={userStore.photoURL || userIcon} alt="user-icon" />}
                    </div>
                }
                <Button text={isLoggedIn ? 'Sign Out' : 'Sign In'} clickHandler={clickHandler} />
            </div>

        </div>
    )
}

export default Header
