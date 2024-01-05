import React  from 'react'
import {Link} from 'react-router-dom'
import "../App.css"

const Navbar = () => {
  return (
      <nav>
        <ul className='ul'>
            <li className='left-btn'>
                <Link to='/' className='Home'> Home</Link>
            </li>
            <li className='right-btn'>
               <Link to='/' className='Bookmarks'> BookMarks </Link>
            </li>
        </ul>
      </nav>
  )
}

export default Navbar;