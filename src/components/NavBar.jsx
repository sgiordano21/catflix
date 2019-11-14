import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className='navbardiv'>
      <ul>
        <li><a href='https://www.oregonhumane.org/' target='_blank' className='btn btn-primary'>Home</a></li>
        <li><a href='https://www.reddit.com/r/cats/' target='_blank' className='btn btn-primary'>New Releases</a></li>
        <li><a href='https://thecatsite.com/' target='_blank' className='btn btn-primary'>Your List</a></li>
      </ul>
      <form>
        <button className='btn tweet'>Search</button>
        <input type="text" placeholder="     Search Catflix"/>
      </form>
    </div>
  );
}

export default NavBar;