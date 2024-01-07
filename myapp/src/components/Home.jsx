import {useState , useEffect} from 'react'
import { CiBookmarkPlus } from "react-icons/ci";
import React from 'react'
import '../App.css'


const Home = () => {
  const [quote, setQuote] = useState('');
  const [uthor , setUthor] = useState('');
  const apiUrl = 'https://api.quotable.io/random';
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

  const fetchQuote = async () => {
    try {
      const response = await fetch(corsAnywhereUrl + apiUrl);
      const data = await response.json();
      setQuote(data.content);
      setUthor(data.author)
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNextQuote = () => {
    setQuote('');
    setUthor(' ');
    fetchQuote();
  };

  const handleBookmark = () => {
    const bookmarkedQuote = { quote, uthor };
    const existingBookmarks = JSON.parse(localStorage.getItem('bookmarkedQuotes')) || [];
    const newBookmarks = [...existingBookmarks, bookmarkedQuote];
    localStorage.setItem('bookmarkedQuotes', JSON.stringify(newBookmarks));
  };


return (
    <div>
    <div className='Output-container'>
      <h3 className='quote'>"{quote}"</h3>

        <div className='sideuu'>

      <h3 className='author'>-{uthor}</h3>

      <CiBookmarkPlus className='icon' quote={quote} author={uthor} onClick = {handleBookmark}  />
        </div>
    
      
    </div>
      
    <button className='Next-Quote' onClick={handleNextQuote}> Next Quote </button>
    </div>
  )
}

export default Home;