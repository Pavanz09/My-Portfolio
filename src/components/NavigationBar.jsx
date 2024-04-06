import React from 'react';
// import { Link } from 'react-router-dom';
import  '../styles/NavigationBar.css'
// import {faBars , faCircleXmark} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationBar = () => {

  return (
    <>
    <div className='headerSection'>
    <div className='headerName'>
        <h2 style={{marginLeft:'40px'}}>Portfolio</h2>
    </div>
    <div className='navbar'>
    <nav>
      <ul  className='navBarLinks'>
        <li  className='list'><a href="/" className='links'>Home</a></li>
        <li  className='list'><a href="/about" className='links'>About</a></li>
        <li  className='list'><a href="/projects" className='links'>Projects</a></li>
        <li  className='list'><a href="/skills" className='links'>Skills</a></li>
        <li  className='list'><a href="/contact" className='links'>Contact</a></li>
      </ul>
    </nav>
    </div>
    {/* <div className='mobileNavBar'>
    <nav>
    <ul  className='navBarMpbileLinks'>
        <li>
          <Link href="/" className='links'>Home</Link>
        </li>
        <li>
          <Link href="/about" className='links'>About</Link>
        </li>
        <li>
          <Link href="/projects" className='links'>Projects</Link>
        </li>
        <li>
          <Link href="/skills" className='links'>Skills</Link>
        </li>
        <li>
          <Link href="/contact" className='links'>Contact</Link>
        </li>
      </ul>
    </nav>
    </div> */}
    </div>
    </>
  );
};

export default NavigationBar;

