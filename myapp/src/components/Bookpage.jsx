import React, { useEffect, useState } from 'react';

const BookPage = () => {
  const [bookmarkedQuotes, setBookmarkedQuotes] = useState([]);

  useEffect(() => {
    const storedBookmarkedQuotes = JSON.parse(localStorage.getItem('bookmarkedQuotes')) || [];
    setBookmarkedQuotes(storedBookmarkedQuotes);
  }, []);

  return (
    <div>
      <h2>Book Page</h2>
      <div className="bookmarked-list">
        {bookmarkedQuotes.map((item, index) => (
          <div key={index} className="Output-container">
            <p>Quote: {item.quote}</p>
            <p>Author: {item.uthor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookPage;
