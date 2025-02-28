import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="menu">
        <a href="/" onClick={() => setMenu("home")} className={menu==="home" && "active"}>home</a>
        <Link to="/bookofmonth" onClick={() => setMenu("bookOfMonth")} className={menu==="bookOfMonth" && "active"}>book of the month</Link>
        {/* <a href="#footer" onClick={() => setMenu("contactUs")} className={menu==="contactUs" && "active"}>contact us</a> */}
      </ul>
    </div>
  )
}

export default Navbar;
