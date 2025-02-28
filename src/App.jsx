import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home";
import BookOfMonth from "./pages/book-of-month/BookOfMonth";
import MyBooks from "./pages/my-books/MyBooks";
import User from "./pages/user-profile/User";
import Footer from "./components/Footer/Footer";
import UserHome from "./pages/UserHome/UserHome";
import Review from "./pages/write-review/Review";

const App = () => {

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookofmonth" element={<BookOfMonth />} />
          <Route path="/mybooks" element={<MyBooks />} />
          <Route path="/userprofile" element={<User />} />
        </Routes>
        <UserHome /> 
        <Review />
      </div>
      
      <Footer />

      
      
    </>
  )
}

export default App;
