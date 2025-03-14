import React from 'react';
import "./BookOfMonth.css";
import BookCard from '../../components/BookCard/BookCard';

const BookOfMonth = () => {
  return (
    <>
        <div id="bookofmonth">
            <div className="intro">
                <h2>The Book of March</h2>
                <p>Find out what these months recommendations are!</p>
            </div>
        </div>
        <div className='text'>
            <p>Discover our handpicked recommendation for this month! Each month, we spotlight a book that’s sure to ignite your passion for reading. Whether it’s a thrilling mystery, a thought-provoking non-fiction, or a heartwarming novel, find out what we’re recommending this month and why it’s a must-read. Don’t miss out—get inspired, start reading, and write down your thoughts about it right here on NovelNotes!</p>
        </div>
        <hr className='hrBookOfMonth'/>
        <BookCard 
        img="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387754966i/17607.jpg"
        title="All about love"
        author="Bell Hooks"
        year="1999"
        rec="Spring arrives not in haste, but in whispers—soft petals unfurling, golden light stretching longer into the evening, the air thick with renewal and quiet possibility. It is the season where love, like the earth itself, stirs from dormancy, stretching toward the sun. And what better guide to this season of awakening than All About Love by bell hooks?
        With tenderness and conviction, hooks redefines love, not as a fleeting emotion, but as a practice—one that requires courage, commitment, and transformation. She challenges the myths we inherit about love, urging us to unlearn the transactional, the conditional, the passive forms we have accepted. In their place, she plants seeds of radical love, love as an ethic, love as an action, love as a revolution. 
        Reading All About Love in the springtime feels serendipitous. Just as the world shakes off the cold, her words ask us to shed our fears, our wounds, our hesitation to love fully and deeply. She speaks of healing, of trust, of choosing love even when it feels impossible. And like the first bloom pushing through thawed ground, her wisdom reminds us: love is always possible. 
        This is a book to read under dappled sunlight, in the hush of a rain-kissed morning, with the scent of lilacs curling through an open window. It is for those who seek love in all its forms—not just romantic, but self-love, community love, the kind of love that rebuilds and reimagines. 
        Just as the earth, having embraced its quiet season of rest, awakens in its own time, All About Love reminds us that love, too, follows its own rhythm—emerging when we nurture it, when we are ready to receive it. 
        Let this book be your invitation to soften, to open, to bloom. "
        />
    </>
  )
}

export default BookOfMonth;
