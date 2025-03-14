import React from 'react'
import "./BookCard.css";
import { useNavigate } from 'react-router-dom';


const BookCard = ({img, title, author, year, rec, id}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigating to review with ID:", id);
    navigate(`/review/${id}`); // navigate to new review page
  }

  return (
    <div className='bookcard'>
        <div className="bookinfo">
            <img src={img} alt={`${title} cover`} className="bookcover" />
            <div className="title-author">
                <h2 className='book-cover' onClick={handleClick} style={{ cursor: "pointer", textDecoration: "none" }}>{title}</h2>
                <h4>by {author}</h4>
                <h5>published in {year}</h5>
            </div>
            
        </div>
        
        <p className="review-preview">{rec}</p>
    </div>
  )
}

export default BookCard
