import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./UserHome.css";
import Navbar from '../../components/Navbar/Navbar';
import BookCard from '../../components/BookCard/BookCard';

const UserHome = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    const fetchUserReviews = async () => {
      try {
        const response = await fetch("https://novel-notes-mjoz.onrender.com/user/user-reviews", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Fetched reviews: ", data)
          setReviews(data);
        } else {
          console.error("Failed to fetch user reviews");
        }
      } catch (error) {
        console.error("Error fetching user reviews:", error);
      }
    };

    fetchUserReviews();
  }, [navigate]);

  return (
    <div>
        <div className="userhome">
            <div className="userhome-content">
                <h2>Welcome to Your NovelNotes Dashboard!</h2>
                <button onClick={() => navigate("/write-review")}>write reviews here</button>
            </div>
        </div>
        <div className="yourbooks">
            <h4>Relive the stories through the reviews you've written:</h4>
            <hr />
            <div className="book-card-container">
              {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <BookCard
                  key={index}
                  id={review.id} // Pass ID
                  img={review.img}
                  title={review.title}
                  author={review.author}
                  year={review.year}
                  rec={review.review.substring(0, 100) + "..."}
                />
                ))
                ) : (
                <p>No reviews yet. Start writing!</p>
              )}
            </div>
            {/* <BookCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ8oMQuybOqRKYihnBHGcZcLO1gs8UqFBNWA&s"
            title="Wuthering Heights"
            author="Emily Bronte"
            year="1847"
            rec="The novel leaves me with a sense of melancholy, as if I too have been swept away by the storm, watching from afar as these tragic figures burn and fade into the mist. And yet, I cannot help but feel a strange reverence for Wuthering Heights, for it holds within it a raw beauty that transcends love, loss, and time itself. It is a story that refuses to be forgotten, as haunting and inevitable as the winds that sweep over those desolate moors."
            /> */}
        </div>
    </div>
  )
}

export default UserHome
