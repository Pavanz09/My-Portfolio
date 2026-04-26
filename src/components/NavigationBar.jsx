import '../styles/NavigationBar.css';
import { Link } from 'react-scroll';

const links = [
  { to: 'home', label: 'Home', num: '01' },
  { to: 'about', label: 'About', num: '02' },
  { to: 'skills', label: 'Skills', num: '03' },
  { to: 'resume', label: 'Resume', num: '04' },
  { to: 'projects', label: 'Work', num: '05' },
  { to: 'contact', label: 'Contact', num: '06' },
];

const NavigationBar = () => {
  return (
    <header className='headerSection'>
      <div className='container nav-inner'>
        <Link to='home' spy={true} smooth={true} offset={-100} className='logo-link'>
          <span className='logo-mark'>P</span>
          <span className='logo-text'>Pavan<span className='logo-dot'>.</span></span>
        </Link>

        <nav className='navbar'>
          <ul className='navBarLinks'>
            {links.map(({ to, label, num }) => (
              <li key={to}>
                <Link className='list' activeClass='active' to={to} spy={true} smooth={true} offset={-100}>
                  <span className='list-num'>{num}</span>
                  <span className='list-label'>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a href="mailto:pavansatyappanavar6@gmail.com" className='nav-cta'>
          <span className='nav-cta-dot' />
          Available
        </a>
      </div>
    </header>
  );
};

export default NavigationBar;
