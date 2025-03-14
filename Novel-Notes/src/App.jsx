import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home";
import BookOfMonth from "./pages/book-of-month/BookOfMonth";
import User from "./pages/user-profile/User";
import Footer from "./components/Footer/Footer";
import UserHome from "./pages/UserHome/UserHome";
import Review from "./pages/write-review/Review";
import ReviewDetails from "./pages/review-details/ReviewDetails";

const App = () => {

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookofmonth" element={<BookOfMonth />} />
          <Route path="/user-profile" element={<User />} />
          <Route path="/user-home" element={<UserHome />} />
          <Route path="/write-review" element={<Review />} />
          <Route path="/review/:id" element={<ReviewDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
