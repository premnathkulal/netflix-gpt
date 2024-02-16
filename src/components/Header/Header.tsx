import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import netflixLog from '../../assets/netflix-logo.png'
import Button from '../Button/Button'
import './Header.scss'

const Header = () => {
    const navigate = useNavigate();
    const [isLoggedIn] = useState(true)
    const [btnText] = useState<string>('Sign In')

    const clickHandler = () => {
        navigate('/auth')
    }

    return (
        <div className="header">
            <div className="brand-icon">
                <img src={netflixLog} alt="logo" />
            </div>
            <div className="header-actions">
                {isLoggedIn && <Button text={btnText} clickHandler={clickHandler} />}
            </div>
        </div>
    )
}

export default Header
