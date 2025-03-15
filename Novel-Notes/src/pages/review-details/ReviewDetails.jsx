import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./ReviewDetails.css";

const ReviewDetails = () => {
    const { id } = useParams(); // get ID from URL
    console.log("ID from URL: ", id);
    const [review, setReview] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/"); 
            return;
        }

        const fetchReview = async () => {
          try {
            const response = await fetch(`https://novel-notes-mjoz.onrender.com/user/reviews/${id}`, { // Fetch to route
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            });
    
            if (response.ok) {
              const data = await response.json();
              setReview(data);
            } else {
              console.error("Failed to fetch review");
            }
          } catch (error) {
            console.error("Error fetching review:", error);
          }
        };
    
        fetchReview();
    }, [id, navigate]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this review?");
        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`https://novel-notes-mjoz.onrender.com/user/delete-review/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                alert("Review deleted successfully!");
                navigate("/user-home");
            } else {
                alert("Failed to delete review.");
            }
        } catch (error) {
            console.error("Error deleting review: ", error);
        }
    };

    const handleEdit = () => {
        navigate(`/write-review?id=${id}`, {
            state: {
                img: review.img,
                title: review.title,
                author: review.author,
                year: review.year,
                review: review.review,
            }
        });
    };

  return (
    <div className='review-details-container'>
      {review ? (
        <div className="review-card">
            <div className="img-title-container">
                <img src={review.img} alt={review.title} className="review-cover" />
                <div className="review-info">
                    <h2>{review.title}</h2>
                    <h4>by {review.author}</h4>
                    <h5>published in {review.year}</h5>
                </div>
            </div>
            
          <p className="review-details">{review.review}</p>
          <div className="review-buttons">
            <button className="edit-button" onClick={handleEdit}>Edit</button>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      ) : (
        <p>Loading review...</p> 
      )}
    </div>
  )
}

export default ReviewDetails;
