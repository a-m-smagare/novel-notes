import React from 'react'
import "./BookCard.css";

const BookCard = ({img, title, author, year, rec}) => {
  return (
    <div className='bookcard'>
        <div className="bookinfo">
            <img src={img} alt="Dracula Book Cover" className="bookcover" />
            <div className="title-author">
                <h2>{title}</h2>
                <h4>by {author}</h4>
                <h5>published in {year}</h5>
            </div>
            
        </div>
        
        <p>{rec}</p>
    </div>
  )
}

export default BookCard
