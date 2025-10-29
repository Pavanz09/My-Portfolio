import React from 'react';
import  '../styles/NavigationBar.css'
import { Link } from 'react-scroll';

const NavigationBar = () => {

  return (
    <>
    <div className='headerSection'>
    <div className='headerName'>
        <h1 style={{marginLeft:'20px',fontSize:'30px'}}>Pavan<span style={{color:'#FF004F'}}>.</span></h1>
    </div>
    <div className='navbar'>
    <nav>
      <ul  className='navBarLinks'>
        <Link  className='list' activeClass='active' to='home' spy={true} smooth={true} offset={-100}>Home</Link>
        <Link  className='list' activeClass='active' to='about' spy={true} smooth={true} offset={-100}>About</Link>
        <Link  className='list' activeClass='active' to='skills' spy={true} smooth={true} offset={-100}>Skills</Link>
        <Link  className='list' activeClass='active' to='resume' spy={true} smooth={true} offset={-100}>Resume</Link>
        <Link  className='list' activeClass='active' to='projects' spy={true} smooth={true} offset={-100}>Portfolio</Link>
        <Link  className='list' activeClass='active' to='contact' spy={true} smooth={true} offset={-100}>Contact</Link>
      </ul>
    </nav>
    </div>
    </div>
    </>
  );
};

export default NavigationBar;

