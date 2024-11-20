import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header'>
    <nav>
      <ul className='navcont'>
        <li><Link to="/" className='link'>Home</Link></li>
        <li><Link to="/about" className='link'>About</Link></li>
        <li><Link to="/fruits" className='link'>Fruits</Link></li>
        <li><Link to="/contact" className='link'>Contact</Link></li>
      </ul>
    </nav>
    </header>
  );
};

export default Navbar;
