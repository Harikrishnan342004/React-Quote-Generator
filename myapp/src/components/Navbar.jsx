import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <ul className='ul'>
        <li className='left-btn'>
          <Link to='/' className='Home'> Home</Link>
        </li>
        <li className='right-btn'>
          <Link to='/Bookpage' className='Bookmarks' > BookMarks </Link>
        </li>
      </ul>
     

      
    </nav>
  );
}

export default Navbar;
