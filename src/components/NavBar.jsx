import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className='navbardiv'>
      <ul>
        <li className="btn">Home</li>
        <li className="btn">Notifications</li>
        <li className="btn">Messages</li>
      </ul>
      <form>
        <button className='btn tweet'>Search</button>
        <input type="text" placeholder="     Search Catflix"/>
      </form>
    </div>
  );
}

export default NavBar;