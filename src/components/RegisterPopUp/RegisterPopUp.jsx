import React from 'react'
import "./RegisterPopUp.css";
import { assets } from '../../assets/assets';

const RegisterPopUp = ({setShowRegister, setShowLogin}) => {
  return (
    <div className='register-pop-up'>
      <form className="register-popup-container">
        <div className="register-popup-title">
            <h2>Register</h2>
            <img onClick={()=>setShowRegister(false)} src={assets.closeIcon} />
        </div>
        <div className="register-popup-input">
            <input type="text" placeholder="Your Name" required />
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
        </div>
        <button>Register</button>
        <p>Already have an account? <span onClick={() => {
        setShowRegister(false);
        setShowLogin(true);
      }}>Click here!</span></p>
      </form>
      


    </div>
  )
}

export default RegisterPopUp