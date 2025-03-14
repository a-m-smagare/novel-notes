import React from 'react'
import "./Footer.css";
import { assets } from '../../assets/assets';

const Footer = () => {

   const date = new Date().getFullYear();
    
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="content-left">
                <img src={assets.logofooter} alt="Logo" />
                <p>Discover and share your love for books by writing reviews, preserving your thoughts, and revisiting your favorite stories anytime.</p>
            </div>
            <div className="content-center">
                <h2>About Us</h2>
                <ul>
                    <li>Home</li>
                    <li>Our Story</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+123456789</li>
                    <li>contact@novelnotes.com</li>
                </ul>
            </div>
        </div>
        <hr />
         <p className='copyright'>Copyright © {date} NovelNotes. All Rights Reserved.</p>
        
    </div>
  )
}

export default Footer;
