import React from 'react';
import "./BookOfMonth.css";
import BookCard from '../../components/BookCard/BookCard';

const BookOfMonth = () => {
  return (
    <>
        <div id="bookofmonth">
            <div className="intro">
                <h2>The Book of February</h2>
                <p>Find out what these months recommendations are!</p>
            </div>
        </div>
        <div className='text'>
            <p>Discover our handpicked recommendation for this month! Each month, we spotlight a book that’s sure to ignite your passion for reading. Whether it’s a thrilling mystery, a thought-provoking non-fiction, or a heartwarming novel, find out what we’re recommending this month and why it’s a must-read. Don’t miss out—get inspired, start reading, and write down your thoughts about it right here on NovelNotes!</p>
        </div>
        <hr className='hrBookOfMonth'/>
        <BookCard 
        img="https://devontrevarrowflaherty.com/wp-content/uploads/2023/09/dracula.jpg"
        title="Dracula"
        author="Bram Stoker"
        year="1897"
        rec="This month, we’re diving into the classic gothic horror that’s captivated readers for over a century—Dracula by Bram Stoker. A tale everyone knows, yet few have actually read, Dracula remains an iconic must-read, especially while the weather is still rainy and cold. What makes this book so compelling is how Stoker's writing brings a haunting sense of dread, even though the infamous vampire himself doesn’t appear much on the page. Instead, the essence of Count Dracula is felt in every corner of the story, creeping behind every shadow and leaving an indelible mark on the minds of the characters. Written in the form of diary entries, letters, and newspaper clippings, this format offers a unique and deeply personal connection to the protagonists. It allows you to experience their fear, their resolve, and their ultimate fight against the nightmarish creature in real-time, just as they would have. Bram Stoker’s skillful use of this narrative style makes Dracula a spine-chilling read, drawing the reader into the lives of the characters and creating a feeling of unease with every page. The subtlety with which the tension builds, despite Dracula’s minimal direct presence, is a testament to the masterful storytelling that makes Dracula a timeless classic. If you're looking for a book that brings the eerie atmosphere of the winter months to life once more before the springtime comes, Dracula is the perfect pick. This is a tale that’s not just about vampires, but about the darkness that lingers in the corners of our minds, a story that stays with you long after you’ve turned the last page."
        />
    </>
  )
}

export default BookOfMonth;
