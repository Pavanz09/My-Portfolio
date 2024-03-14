import '../styles/MainPage.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
 

export default function MainPage(){
  const [text] = useTypewriter({
    words : ['Web Developer', 'Designer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  });
    return (
      <>
      <div className='homePageMainContainer'>
      <h1>I'm <span style={{color:'#FF004F'}}>Pavan</span>
      </h1>
        <h1>I'm a &nbsp;<span style={{color:'#fff'}}>
          {text}
        </span>
        <span style={{color:'#FF004F'}}>
          <Cursor cursorStyle='|'/>
        </span></h1>
      </div>
      </>
    )
  };


