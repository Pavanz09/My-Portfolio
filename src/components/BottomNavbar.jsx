import React from 'react';
import '../styles/BottomNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faAddressCard,faListCheck,faDiagramProject,faPhone, faBook} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const BottomNavBar = () => {
  return (
    // <div className='bottom-main'>
    <div className="bottom-nav-bar">
        <Link  className='list' activeClass='active' to='home' spy={true} smooth={true} offset={-100}><FontAwesomeIcon icon={faHouse} /></Link>
        <Link  className='list' activeClass='active' to='about' spy={true} smooth={true} offset={-100}><FontAwesomeIcon icon={faAddressCard} /></Link>
        <Link  className='list' activeClass='active' to='skills' spy={true} smooth={true} offset={-100}><FontAwesomeIcon icon={faListCheck} /></Link>
        <Link  className='list' activeClass='active' to='resume' spy={true} smooth={true} offset={-100}><FontAwesomeIcon icon={faBook} /></Link>
        <Link  className='list' activeClass='active' to='projects' spy={true} smooth={true} offset={-100}><FontAwesomeIcon icon={faDiagramProject} /></Link>
        <Link  className='list' activeClass='active' to='contact' spy={true} smooth={true} offset={-100}><FontAwesomeIcon icon={faPhone} /></Link>
    </div>
    // </div>
  );
};

export default BottomNavBar;
