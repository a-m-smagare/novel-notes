import React from 'react'
import "./UserHome.css";
import Navbar from '../../components/Navbar/Navbar';
import BookCard from '../../components/BookCard/BookCard';

const UserHome = () => {
  return (
    <div>
      <Navbar />
        <div className="userhome">
            <div className="userhome-content">
                <h2>Welcome to Your NovelNotes Dashboard!</h2>
                <button>Write your Book Review</button>
            </div>
        </div>
        <div className="yourbooks">
            <h4>Relive the stories through the reviews you've written:</h4>
            <hr />
            <BookCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ8oMQuybOqRKYihnBHGcZcLO1gs8UqFBNWA&s"
            title="Wuthering Heights"
            author="Emily Bronte"
            year="1847"
            rec="The novel leaves me with a sense of melancholy, as if I too have been swept away by the storm, watching from afar as these tragic figures burn and fade into the mist. And yet, I cannot help but feel a strange reverence for Wuthering Heights, for it holds within it a raw beauty that transcends love, loss, and time itself. It is a story that refuses to be forgotten, as haunting and inevitable as the winds that sweep over those desolate moors."
            />
        </div>
    </div>
  )
}

export default UserHome
