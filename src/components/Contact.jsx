import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import "../styles/Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa } from '@awesome.me/kit-KIT_CODE/icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const formRef = useRef(null);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
    function sendEmail(e) {
      setButtonDisabled(true); 
      // if (window.location.hostname === 'localhost') {
      //   window.alert('Cannot send email from localhost. Please deploy your application to a server to send emails.');
      // }else{
      e.preventDefault();
      const formData = new FormData(e.target);
      const templateParams = {
        from_name: formData.get('from_name'),
        message: formData.get('message'),
        email: formData.get('email'),
        mobileno: formData.get('mobileno')
      };
      emailjs.send(
        import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((result) => {
        window.alert('Email sent successfully!');
        console.log(result.text);
      }, (error) => {
        window.alert('An error occurred while sending the email.'+error.text);
      }).finally(() => {
        setButtonDisabled(false);
        formRef.current.reset(); 
      });
    // }
  }
  return (
    <div className='contactMainContainer'>
    <h1>Contact Me</h1>
      <div className="ContactUsContainer">
        <div className="contactCard">
          <div className="contactCardBody">
            <div className="cardLeft">
              <form ref={formRef} onSubmit={sendEmail} className="formAlign">
              <div className="inputContainer">
                <input type="text" placeholder="Name" name="from_name" className="inputFields" required/>
                <input type="text" name="mobileno" placeholder="Mobile no" className="inputFields" required/>
                <input type="email" name="email" placeholder="Email Id" className="inputFields" required/>
                <textarea name="message" id="" cols="30" rows="10" className="messageBox" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="contactSubmit" disabled={isButtonDisabled}
              style={{ display: isButtonDisabled ? 'none' : 'block' }}
              >Submit</button>
              </form>
            </div>
            <div className="cardRight">
              <div className="socialPlatform">
              <p style={{margin:'0px'}}><FontAwesomeIcon icon={faEnvelope} style={{fontSize:'20px',color:'#FF004F'}}/> Email </p>
              <h3 style={{margin:'0px', color:'#adadad'}}>pavansatyappanavar6@gmail.com</h3>
              <a href="mailto:pavansatyappanavar6@gmail.com" style={{color:'#FF004F',fontSize:'12px'}}>Send Message</a>
              </div>
              <div className="socialPlatform">
              <p style={{margin:'0px'}}><FontAwesomeIcon icon={faLinkedin} style={{fontSize:'20px',color:'#FF004F'}}/> LinkedIn </p>
              <h3 style={{margin:'0px' , color:'#adadad'}}>Pavan Satyappanavar</h3>
              <a href="https://www.linkedin.com/in/pavan-satyappanavar-b54a11243/" style={{color:'#FF004F',fontSize:'12px'}}>Connect</a>
              </div>
              <div className="socialPlatform">
              <p style={{margin:'0px'}}><FontAwesomeIcon icon={faInstagram} style={{fontSize:'20px',color:'#FF004F'}}/> Instagram </p>
              <h3 style={{margin:'0px', color:'#adadad'}}>@pavanz09</h3>
              <a href="https://instagram.com/pavanz09?igshid=ZDdkNTZiNTM=" style={{color:'#FF004F',fontSize:'12px'}}>Follow</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


