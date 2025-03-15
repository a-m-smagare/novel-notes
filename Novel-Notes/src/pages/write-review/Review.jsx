import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./Review.css"

const Review = () => {

  const navigate = useNavigate();
  const location = useLocation(); // to get state
  
  const stateData = location.state || {};

  const reviewId = new URLSearchParams(location.search).get("id");

  const [bookTitle, setBookTitle] = useState(stateData.title || '');
  const [bookAuthor, setBookAuthor] = useState(stateData.author || '');
  const [bookYear, setBookYear] = useState(stateData.year || '');
  const [review, setReview] = useState(stateData.review || '');
  const [imgUrl, setImgUrl] = useState(stateData.img || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const method = reviewId ? "PUT" : "POST";
      const endpoint = reviewId ? `https://novel-notes-mjoz.onrender.com/user/edit-review/${reviewId}` : `https://novel-notes-mjoz.onrender.com/user/add-review`;

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          img: imgUrl,
          title: bookTitle,
          author: bookAuthor,
          year: bookYear,
          review: review,
        }),
      });

      if (response.ok) {
        // const newReview = {
        //   img: imgUrl,
        //   title: bookTitle,
        //   author: bookAuthor,
        //   year: bookYear,
        //   review: review,
        // };

        // localStorage.setItem("newReview", JSON.stringify(newReview));

        alert(reviewId ? "Review updated successfully!" : "Review added successfully!");
        navigate("/user-home"); 
      } else {
        alert("Failed to submit review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
      <div className="write-review-container">
        <h2>{reviewId ? "Edit Review" : "Book Review"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="review-input">
            <label for="img">Book Cover</label>
            <input id="img"
              type="text"
              placeholder="Image URL of Book Cover"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              required
            />
            <label for="title">Book Title</label>
            <input id="title"
              type="text"
              placeholder='Title'
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
              required
            />
            <div className="input-row">
              <div>
                <label for="author">Author</label>
                <input id="author"
                type="text"
                placeholder="Author"
                value={bookAuthor}
                onChange={(e) => setBookAuthor(e.target.value)}
                required
                />
              </div>
              <div>
                <label for="year">Published in</label>
                <input id="year"
                type="number"
                placeholder="Year"
                value={bookYear}
                onChange={(e) => setBookYear(e.target.value)}
                required
                />
              </div>
            </div>
            <label for="review">Review</label>
            <textarea id="review"
              placeholder="My thoughts..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
            <button type="submit">{reviewId ? "Update Review" : "Add Review"}</button>
          </div>
        </form>
      </div>
  );
};

export default Review;
