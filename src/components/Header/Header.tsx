import { useState } from 'react'
import netflixLog from '../../assets/netflix-logo.png'
import Button from '../Button/Button'
import './Header.scss'

const Header = () => {
    const [isLoggedIn] = useState(true)
    const [btnText] = useState<string>('Sign In')


    return (
        <div className="header">
            <div className="brand-icon">
                <img src={netflixLog} alt="logo" />
            </div>
            <div className="header-actions">
                {isLoggedIn && <Button text={btnText} />}
            </div>
        </div>
    )
}

export default Header
