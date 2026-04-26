import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import "../styles/Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  function sendEmail(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMsg('');

    if (window.location.hostname === 'localhost') {
      setTimeout(() => {
        setStatusMsg('Email service is disabled on localhost. Please use the deployed version.');
        setIsSubmitting(false);
      }, 1000);
      return;
    }

    const formData = new FormData(e.target);
    const templateParams = {
      from_name: formData.get('from_name'),
      message: formData.get('message'),
      email: formData.get('email'),
      mobileno: formData.get('mobileno')
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_USER_ID || import.meta.env.REACT_APP_EMAILJS_USER_ID
    )
    .then(() => {
      setStatusMsg('Email sent successfully!');
      formRef.current.reset();
    })
    .catch((error) => {
      setStatusMsg('An error occurred. Please try again later.');
      console.error(error);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  }

  return (
    <section className='contactMainContainer' id='contact'>
      <h1 className='contactMeHeader'>Contact<span style={{ color: '#FF004F' }}> Me</span></h1>
      <div className="ContactUsContainer">
        <div className="contactCard">
          <div className="contactCardBody">
            <div className="cardLeft">
              <form ref={formRef} onSubmit={sendEmail} className="formAlign">
                <div className="inputContainer">
                  <input type="text" placeholder="Name" name="from_name" className="inputFields" required />
                  <input type="text" name="mobileno" placeholder="Mobile no" className="inputFields" required />
                  <input type="email" name="email" placeholder="Email Id" className="inputFields" required />
                  <textarea name="message" cols="30" rows="10" className="messageBox" placeholder="Message" required></textarea>
                </div>
                {statusMsg && <p className="statusMessage" style={{ color: statusMsg.includes('success') ? '#4BB543' : '#FF004F', fontSize: '14px', marginTop: '10px' }}>{statusMsg}</p>}
                <button 
                  type="submit" 
                  className="contactSubmit" 
                  disabled={isSubmitting}
                  style={{ opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
            <div className="cardRight">
              <div className="socialPlatform">
                <p style={{ margin: '0px' }}><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px', color: '#FF004F' }} /> Email </p>
                <h3 className='socialPlatformHeader'>pavansatyappanavar6@gmail.com</h3>
                <a href="mailto:pavansatyappanavar6@gmail.com" className='SocialContactLinks'>Send Message</a>
              </div>
              <div className="socialPlatform">
                <p style={{ margin: '0px' }}><FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '20px', color: '#FF004F' }} /> LinkedIn </p>
                <h3 className='socialPlatformHeader'>Pavan Satyappanavar</h3>
                <a href="https://www.linkedin.com/in/pavan-satyappanavar-b54a11243/" target="_blank" rel="noopener noreferrer" className='SocialContactLinks'>Connect</a>
              </div>
              <div className="socialPlatform">
                <p style={{ margin: '0px' }}><FontAwesomeIcon icon={faInstagram} style={{ fontSize: '20px', color: '#FF004F' }} /> Instagram </p>
                <h3 className='socialPlatformHeader'>@pavanz09</h3>
                <a href="https://instagram.com/pavanz09?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer" className='SocialContactLinks'>Follow</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


