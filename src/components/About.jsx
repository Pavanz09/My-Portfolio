import '../styles/About.css';
import myProfileImage from '../assets/IMG_20180320_141506.jpg';

const About = () => {
  return (
    <>
      <div className='aboutMainContainer' id='about'>
        <div className='myIntroConatiner'>
          <h1>
            About<span style={{ color: '#FF004F', margin: '0px' }}> Me</span>
          </h1>
          <div className='myIntroduction'>
            <p style={{ textAlign: 'justify', lineHeight: '27px' }}>
              Hello and welcome! I’m{' '}
              <span style={{ color: 'rgb(255, 0, 79)', fontWeight: 'bolder' }}>
                Pavan Satyappanavar
              </span>
              , a Software Development Engineer with over 3 years of experience specializing in high-scale IoT ecosystems and Multi-OEM architectures. My journey has evolved from building responsive UI components to architecting complex, brand-isolated mobile platforms and robust cloud-to-device integrations.
              <br />
              Currently, at Atom8 Robotic Labs, I lead the development of multi-tenant React Native applications and scalable backend systems using Node.js, AWS, and Kafka. I am deeply focused on the intersection of **Infrastructure and Application Logic**—ensuring that the systems I build are not just functional, but also highly available, secure, and ready to scale.
              <br />
              My 2025 contributions have been centered around automating deployment pipelines with GitLab CI/CD, bridging Smart Home ecosystems (Google Home/Alexa), and exploring embedded firmware to better understand the full end-to-end device lifecycle.
              <br />
              Outside of the terminal, I draw inspiration from travel and PC gaming, which help me approach system design with a perspective on interactivity and exploration. I am always excited about collaborating on meaningful digital experiences that push the boundaries of technology.
            </p>
          </div>
        </div>

        <div className='myImageContainer'>
          <img src={myProfileImage} alt="My Image" className='profilePic' />
        </div>
      </div>
    </>
  );
};

export default About;

