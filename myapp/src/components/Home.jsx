import {useState , useEffect} from 'react'
import React from 'react'
import '../App.css'

const Home = () => {
  const [quote, setQuote] = useState('');
  const apiUrl = 'https://api.quotable.io/random';
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

  const fetchQuote = async () => {
    try {
      const response = await fetch(corsAnywhereUrl + apiUrl);
      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNextQuote = () => {
    setQuote('');
    fetchQuote();
  };


  
  
  return (
    <div>
    <div className='Output-container'>
      <h3 className='quote'>{quote}</h3></div>
    <button className='Next-Quote' onClick={handleNextQuote}> Next Quote </button>
    </div>
  )
}

export default Home;