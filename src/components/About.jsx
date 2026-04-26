import '../styles/About.css';
import SectionMarker from './SectionMarker';

const About = () => {
  return (
    <section className='aboutSection section' id='about'>
      <div className='container'>
        <SectionMarker num='01' label='Profile'>
          About <em>me</em>.
        </SectionMarker>

        <div className='about-body'>
          <div className='about-intro'>
            <p>
              Hello and welcome — I'm <strong>Pavan Satyappanavar</strong>, a
              Software Development Engineer with over <strong>3 years</strong>
              of experience specializing in high-scale IoT ecosystems and
              Multi-OEM architectures. My journey has evolved from building
              responsive UI components to architecting complex, brand-isolated
              mobile platforms and robust cloud-to-device integrations.
            </p>
          </div>

          <blockquote className='about-pull'>
            "I'm focused on the intersection of <em>infrastructure</em> and
            <em> application logic</em> — building systems that are not just
            functional, but highly available, secure, and ready to scale."
          </blockquote>

          <div className='about-grid'>
            <div className='about-block'>
              <span className='about-tag'>Now</span>
              <h3>Atom8 Robotic Labs</h3>
              <p>
                Leading multi-tenant React Native applications and scalable
                backend systems with Node.js, AWS, and Kafka. Bridging
                Smart Home ecosystems (Google Home / Alexa) and exploring
                embedded firmware end-to-end.
              </p>
            </div>
            <div className='about-block'>
              <span className='about-tag'>Then</span>
              <h3>From UI to Architecture</h3>
              <p>
                Started with responsive UIs at TekSolvent, automated banking
                login flows at Intelligrow, and now architect device
                lifecycle systems serving thousands of homes.
              </p>
            </div>
            <div className='about-block'>
              <span className='about-tag'>Off-screen</span>
              <h3>Travel & PC Gaming</h3>
              <p>
                Inspiration from places I've explored and games I've spent
                too many hours in. Both shape how I think about systems —
                interactive, exploratory, and always responsive.
              </p>
            </div>
          </div>

          <div className='about-strip'>
            <div><span>Bengaluru, IN</span><small>Location</small></div>
            <div><span>SDE I @ Atom8</span><small>Role</small></div>
            <div><span>3+ Years</span><small>Experience</small></div>
            <div><span>Web · Mobile · IoT · Cloud · DevOps</span><small>Stack focus</small></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
