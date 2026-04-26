import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import SectionMarker from './SectionMarker';
import { SOCIAL, EMAIL_HREF } from '../data/socials';

const CONTACT_CARDS = [
  { icon: faEnvelope,     label: 'EMAIL',     href: EMAIL_HREF,    value: SOCIAL.email },
  { icon: faLinkedin,     label: 'LINKEDIN',  href: SOCIAL.linkedin, value: 'Pavan Satyappanavar' },
  { icon: faSquareGithub, label: 'GITHUB',    href: SOCIAL.github,   value: '@Pavanz09' },
  { icon: faInstagram,    label: 'INSTAGRAM', href: SOCIAL.instagram, value: '@pavanz09' },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  function sendEmail(e) {
    e.preventDefault();
    const form = e.target;
    setIsSubmitting(true);
    setStatusMsg('');

    if (window.location.hostname === 'localhost') {
      setTimeout(() => {
        setStatusMsg('Email service is disabled on localhost. Please use the deployed version.');
        setIsSubmitting(false);
      }, 800);
      return;
    }

    const formData = new FormData(form);
    const templateParams = {
      from_name: formData.get('from_name'),
      message: formData.get('message'),
      email: formData.get('email'),
      mobileno: formData.get('mobileno'),
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then(() => {
        setStatusMsg('Email sent successfully!');
        form.reset();
      })
      .catch(() => {
        setStatusMsg('An error occurred. Please try again later.');
      })
      .finally(() => setIsSubmitting(false));
  }

  const isSuccess = statusMsg.toLowerCase().includes('success');

  return (
    <section className='contactSection section' id='contact'>
      <div className='container'>
        <SectionMarker num='05' label='Get In Touch'>
          Let's <em>build</em> something.
        </SectionMarker>

        <div className='contact-headline'>
          <h2>
            Have a project in mind, a role to discuss, or just want to
            <span> say hi?</span> The fastest way is below.
          </h2>
        </div>

        <div className='contact-grid'>
          <div className='contact-form-wrap'>
            <form onSubmit={sendEmail} className='contact-form'>
              <div className='form-row'>
                <label className='field'>
                  <span>Your Name</span>
                  <input type="text" name="from_name" placeholder="John Doe" required />
                </label>
                <label className='field'>
                  <span>Mobile</span>
                  <input type="text" name="mobileno" placeholder="+91 98765 43210" required />
                </label>
              </div>
              <label className='field'>
                <span>Email</span>
                <input type="email" name="email" placeholder="you@domain.com" required />
              </label>
              <label className='field'>
                <span>Message</span>
                <textarea name="message" rows="5" placeholder="Tell me about the role / project / idea..." required />
              </label>

              {statusMsg && (
                <p className='form-status' data-success={isSuccess}>
                  {statusMsg}
                </p>
              )}

              <button type="submit" className='form-submit' disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send Message'}
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
          </div>

          <aside className='contact-side'>
            {CONTACT_CARDS.map(({ icon, label, href, value }) => (
              <div key={label} className='contact-card'>
                <div className='cc-icon'><FontAwesomeIcon icon={icon} /></div>
                <div className='cc-meta'>
                  <span className='cc-label'>{label}</span>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel='noreferrer'
                    className='cc-value'
                  >
                    {value}
                  </a>
                </div>
              </div>
            ))}

            <div className='contact-availability'>
              <span className='ca-led' />
              <div>
                <strong>Available for new work</strong>
                <small>Replies within 24h · Bengaluru, IN</small>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
