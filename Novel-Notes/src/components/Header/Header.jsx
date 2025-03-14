import React from 'react'
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Header = ({setShowLogin, setShowRegister}) => {

  return (
    <div className="header">
      <div className="header-content">
        <h2>Write about the books you love!</h2>
        <FontAwesomeIcon icon={faCircleUser} size="5x" style={{color: "#ffffff",}} />
        <div className="auth-buttons">
          <button onClick={() => setShowLogin(true)} className="login-btn">Login</button>
          <button onClick={() => setShowRegister(true)} className="register-btn">Register</button>
        </div>
      </div>
    </div>
  )
}

export default Header
