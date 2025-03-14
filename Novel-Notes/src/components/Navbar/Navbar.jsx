import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const checkToken = (token) => {
    if (!token) return false;
    try {
      const decodeToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodeToken.exp > currentTime;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);
    
    if (checkToken(token)) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      localStorage.removeItem("token");
    }
  }, []);

  useEffect(() => {
    if (location.pathname === "/") setMenu("home");
    else if (location.pathname === "/bookofmonth") setMenu("bookOfMonth");
    else if (location.pathname === "/user-home") setMenu("userHome");
    else if (location.pathname === "/user-profile") setMenu("userProfile");
  }, [location.pathname]);

  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="menu">
        <Link to={isLoggedIn ? "/user-home" : "/"} onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        {/* <a href="/" onClick={() => setMenu("home")} className={menu==="home" && "active"}>home</a> */}
        <Link to="/bookofmonth" onClick={() => setMenu("bookOfMonth")} className={menu==="bookOfMonth" && "active"}>book of the month</Link>
        {/* <a href="#footer" onClick={() => setMenu("contactUs")} className={menu==="contactUs" && "active"}>contact us</a> */}
      
        {isLoggedIn && (
          <Link to="/user-profile" onClick={() => setMenu("userProfile")} className={menu === "userProfile" ? "active" : ""}>my profile</Link>
        )}
      
      </ul>
    </div>
  )
}

export default Navbar;
