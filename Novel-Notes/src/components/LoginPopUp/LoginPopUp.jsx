import React, { useState, useEffect } from 'react'
import "./LoginPopup.css";
import { assets } from '../../assets/assets';

const LoginPopUp = ({setShowLogin, setShowRegister}) => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.REACT_API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      window.location.href = "/user-home"; // Redirect to the user home page
    } else {
      alert(data.message); // Show error message if login fails
    }
  };

  return (
    <div className='login-pop-up'>
      <form className="login-popup-container" onSubmit={handleLogin}>
        <div className="login-popup-title">
            <h2>Log-in</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.closeIcon} />
        </div>
        <div className="login-popup-input">
            <input 
            type="text" 
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            required />
            <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required />
        </div>
        <button type="submit">Login</button>
        <p>Create a new account? <span onClick={() => {
        setShowLogin(false);
        setShowRegister(true);
        }}>Click here!</span></p>
      </form>
      
    </div>
  )
}

export default LoginPopUp;
