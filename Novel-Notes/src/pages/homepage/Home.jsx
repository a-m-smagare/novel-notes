import React, {useEffect, useState} from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import LoginPopUp from "../../components/LoginPopUp/LoginPopUp";
import RegisterPopUp from "../../components/RegisterPopUp/RegisterPopUp"

const Home = () => {
    
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    // const [userLoggedIn, setUserLoggedIn] = useState(false);

    useEffect(() => {
      window.scrollTo(0, 0);
    });

  return (
    <>
        {showLogin?<LoginPopUp setShowLogin={setShowLogin} setShowRegister={setShowRegister} />:<></>}
        {showRegister?<RegisterPopUp setShowRegister={setShowRegister} setShowLogin={setShowLogin}/>:<></>}
        <div>
        <Header setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>
        <About />
        <HowItWorks /> 
        </div>
    </>
  )
}

export default Home;
