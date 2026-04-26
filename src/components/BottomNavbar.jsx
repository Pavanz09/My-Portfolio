import '../styles/BottomNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faCode, faFileLines, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const items = [
  { to: 'home', icon: faHouse },
  { to: 'about', icon: faUser },
  { to: 'skills', icon: faCode },
  { to: 'resume', icon: faFileLines },
  { to: 'projects', icon: faBriefcase },
  { to: 'contact', icon: faEnvelope },
];

const BottomNavBar = () => {
  return (
    <div className="bottom-nav-bar">
      {items.map(({ to, icon }) => (
        <Link key={to} activeClass="active" to={to} spy={true} smooth={true} offset={-100}>
          <FontAwesomeIcon icon={icon} />
        </Link>
      ))}
    </div>
  );
};

export default BottomNavBar;
