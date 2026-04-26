import '../styles/MainPage.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faFile } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faSquareFacebook, faInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import myProfileImage from '../assets/IMG_20180320_141506.jpg';
import resumePdf from '../assets/Resume_Pavan_S.pdf';
import { SOCIAL, EMAIL_HREF } from '../data/socials';

const TYPEWRITER_WORDS = [
  'Full Stack Developer',
  'Mobile App Developer',
  'Web Developer',
  'Devops and Cloud enthusiast',
];

const HERO_SOCIALS = [
  { label: 'LinkedIn', href: SOCIAL.linkedin, icon: faLinkedin },
  { label: 'GitHub', href: SOCIAL.github, icon: faSquareGithub },
  { label: 'Instagram', href: SOCIAL.instagram, icon: faInstagram },
  { label: 'Facebook', href: SOCIAL.facebook, icon: faSquareFacebook },
  { label: 'Email', href: EMAIL_HREF, icon: faSquareEnvelope },
];

export default function MainPage() {
  const [text] = useTypewriter({
    words: TYPEWRITER_WORDS,
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 60,
  });

  return (
    <section className='heroSection' id='home'>
      <div className='container hero-grid'>
        <div className='hero-left'>
          <div className='hero-status'>
            <span className='status-led' />
            <span>OPEN TO OPPORTUNITIES · 2026</span>
          </div>

          <h1 className='hero-name'>
            <span className='hero-greet'>Hi, I'm</span>
            <span className='hero-name-line'>
              Pavan<span className='hero-dot'>.</span>
            </span>
          </h1>

          <h2 className='hero-role'>
            <span className='hero-role-prefix'>—</span>
            <span className='hero-role-text'>{text}</span>
            <Cursor cursorStyle='_' />
          </h2>

          <p className='hero-bio'>
            I turn ideas into impactful digital products across web and mobile.
            Three years deep in IoT, full-stack, and DevOps — let's build something meaningful.
          </p>

          <div className='hero-actions'>
            <a href={EMAIL_HREF} className='btn btn-primary'>
              <FontAwesomeIcon icon={faPaperPlane} /> Talk to me
            </a>
            <a href={resumePdf} download="Resume_Pavan_S.pdf" className='btn btn-ghost'>
              <FontAwesomeIcon icon={faFile} /> Download CV
            </a>
          </div>

          <div className='hero-socials'>
            <span className='socials-label'>FIND ME ↘</span>
            {HERO_SOCIALS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel='noreferrer'
                aria-label={label}
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>

        <div className='hero-right'>
          <div className='hero-photo'>
            <span className='photo-corner photo-tl' />
            <span className='photo-corner photo-tr' />
            <span className='photo-corner photo-bl' />
            <span className='photo-corner photo-br' />
            <img src={myProfileImage} alt="Pavan" />
          </div>

          <div className='hero-stat-stack'>
            <div className='hero-stat'>
              <div className='hero-stat-num'>3+</div>
              <div className='hero-stat-label'>Years<br />Building</div>
            </div>
            <div className='hero-stat'>
              <div className='hero-stat-num'>9</div>
              <div className='hero-stat-label'>Shipped<br />Projects</div>
            </div>
          </div>
        </div>
      </div>

      <div className='hero-scroll-cue'>
        <FontAwesomeIcon icon={faArrowDown} />
        <span>SCROLL</span>
      </div>
    </section>
  );
}
