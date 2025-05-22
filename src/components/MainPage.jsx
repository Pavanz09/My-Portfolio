import '../styles/MainPage.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faFile } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin ,faSquareFacebook ,faInstagram ,faSquareGithub} from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
 

export default function MainPage(){
  const [text] = useTypewriter({
words: [
  'Full Stack Dev',
  'Mobile Dev',
  'Web Dev',
  'iOS/Android Ops',
];


    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  });
    return (
      <>
      <div className='homePageMainContainer' id='home'>
      <div className='intoSection'>
      <h2 className='introSubHeader'>Hello<span style={{color:'#FF004F'}} >!</span></h2>
      <h1 className='introName'>I'm <span style={{color:'#FF004F'}}>Pavan</span>
      </h1>
        <h2 className='introSubHeader'><span style={{color:'#FF004F'}}>a</span> &nbsp;
          {text}
        <span style={{color:'#FF004F'}}>
          <Cursor cursorStyle='|'/>
        </span></h2>
        <p style={{margin:'20px 0px 0px 0px',fontFamily:'sans-serif', fontSize:'20px' ,fontStyle:'italic', color:'rgb(167, 167, 167)'}}>I love coming up with new ideas and making cool stuff online. <br />
         Let's team up and create something awesome together!</p>
         <div className='buttonSection'>
         <a href="mailto:pavansatyappanavar6@gmail.com" className='buttons'><FontAwesomeIcon icon={faPaperPlane}/> Talk to me</a>
         <a href="/src/assets/Resume_Pavan_S.pdf" download="Resume_Pavan_S.pdf" className='buttons'><FontAwesomeIcon icon={faFile} /> Download CV</a>
         </div>
        </div>
        <div className='socialPlatformSection'>
        <a href="https://www.linkedin.com/in/pavan-satyappanavar-b54a11243/" className='quickSocialButton'><FontAwesomeIcon style={{fontSize:'40px'}} icon={faLinkedin} /></a>
        <a href="https://instagram.com/pavanz09?igshid=ZDdkNTZiNTM=" className='quickSocialButton'><FontAwesomeIcon style={{fontSize:'40px'}} icon={faInstagram} /></a>
        <a href="https://www.facebook.com/pavan.ksatyappanavar/" className='quickSocialButton'><FontAwesomeIcon style={{fontSize:'40px'}} icon={faSquareFacebook} /></a>
        <a href="mailto:pavansatyappanavar6@gmail.com" className='quickSocialButton'><FontAwesomeIcon style={{fontSize:'40px'}} icon={faSquareEnvelope} /></a>
        <a href="https://github.com/Pavanz09" className='quickSocialButton'><FontAwesomeIcon style={{fontSize:'40px'}} icon={faSquareGithub} /></a>
        </div>
      </div>
      </>
    )
  };
