import React, { useState, useEffect } from 'react';

const Bookmark = ({ quote, author }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(storedBookmarks);
  }, []);

  const handleBookmark = () => {
    const newBookmark = { quote, author };
    const newBookmarks = [...bookmarks, newBookmark];
    setBookmarks(newBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
  };

  return (
    <div>
      <button onClick={handleBookmark}>Bookmark this quote</button>
    </div>
  );
};

export default Bookmark;
