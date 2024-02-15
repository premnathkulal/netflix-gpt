import { useState } from 'react'
import netflixLog from '../../assets/netflix-logo.png'
import Button from '../Button/Button'
import './Header.scss'

const Header = () => {
    const [isLoggedIn] = useState(false)

    return (
        <div className="header">
            <div className="brand-icon">
                <img src={netflixLog} alt="logo" />
            </div>
            <div className="header-actions">
                {isLoggedIn && <Button />}
            </div>
        </div>
    )
}

export default Header
