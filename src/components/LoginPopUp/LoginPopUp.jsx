import React from 'react'
import "./LoginPopUp.css";
import { assets } from '../../assets/assets';

const LoginPopUp = ({setShowLogin, setShowRegister}) => {
  return (
    <div className='login-pop-up'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>Log-in</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.closeIcon} />
        </div>
        <div className="login-popup-input">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
        </div>
        <button>Login</button>
        <p>Create a new account? <span onClick={() => {
        setShowLogin(false);
        setShowRegister(true);
        }}>Click here!</span></p>
      </form>
      
    </div>
  )
}

export default LoginPopUp
