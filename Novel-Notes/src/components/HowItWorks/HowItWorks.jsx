import React from 'react';
import "./HowItWorks.css";
import Step from './Steps/Steps';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
        <h3>How It Works</h3>
        <div className="container">
            <Step
            title="1. Share Your Thoughts"
            text="After reading a book, it’s easy to forget the little details. Here, you can write down your thoughts, favorite quotes, and reflect on what you loved about the story. Share your personal review of each book you've read."
            />
            <Step
            title="2. Keep Your Reviews Organized"
            text="With each review, you create a personal library of your literary journey. Keep your reviews organized by book title, genre, or rating to easily browse through them whenever you want!"
            />
            <Step
            title="3. Return Anytime"
            text="Forgot the details of a great book? No worries! You can always come back to your reviews. Whether it’s to relive the emotions or recall an unforgettable plot twist, your reviews are always here for you."
            />
        </div>
    </div>
  )
}

export default HowItWorks
