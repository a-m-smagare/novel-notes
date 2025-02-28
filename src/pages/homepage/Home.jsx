import React, {useState} from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import LoginPopUp from "../../components/LoginPopUp/LoginPopUp";
import RegisterPopUp from "../../components/RegisterPopUp/RegisterPopUp"

const Home = () => {
    
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <>
        {showLogin?<LoginPopUp setShowLogin={setShowLogin} setShowRegister={setShowRegister} />:<></>}
        {showRegister?<RegisterPopUp setShowRegister={setShowRegister} setShowLogin={setShowLogin}/>:<></>}
        <div>
        <Header setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>
        {userLoggedIn ? <UserHomeContent /> : <>
        <About />
        <HowItWorks /></>
        }
        </div>
    </>
  )
}

export default Home;
