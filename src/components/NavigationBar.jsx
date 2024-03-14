import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/NavigationBar.css'

const NavigationBar = () => {
  return (
    <>
    <div className='navbar'>
    <h2 style={{marginLeft:'40px'}}>Portfolio</h2>
    <nav>
      <ul  className='navBarLinks'>
        <li>
          <Link to="/" className='links'>Home</Link>
        </li>
        <li>
          <Link to="/about" className='links'>About</Link>
        </li>
        <li>
          <Link to="/projects" className='links'>Projects</Link>
        </li>
        <li>
          <Link to="/skills" className='links'>Skills</Link>
        </li>
        <li>
          <Link to="/contact" className='links'>Contact</Link>
        </li>
      </ul>
    </nav>
    </div>
    </>
  );
};

export default NavigationBar;

