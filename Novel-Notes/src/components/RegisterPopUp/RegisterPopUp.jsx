import React, { useState } from 'react'
import "./RegisterPopUp.css";
import { assets } from '../../assets/assets';

const RegisterPopUp = ({setShowRegister, setShowLogin}) => {
  
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // New state
  const [error, setError] = useState("");
  
  const handleRegister =async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      // alert("Passwords do not match!");
      return;
    }

    const res = await fetch("https://novel-notes-mjoz.onrender.com/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      window.location.href = "/user-home";  
    } else {
      alert(data.message); 
    }
  };

  return (
    <div className='register-pop-up'>
      <form className="register-popup-container" onSubmit={handleRegister}>
        <div className="register-popup-title">
            <h2>Register</h2>
            <img onClick={()=>setShowRegister(false)} src={assets.closeIcon} />
        </div>
        <div className="register-popup-input">
            <input 
            type="text" 
            placeholder="Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
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
            <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
            />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Register</button>
        <p>Already have an account? <span onClick={() => {
        setShowRegister(false);
        setShowLogin(true);
      }}>Click here!</span></p>
      </form>
    </div>
  )
}

export default RegisterPopUp