import { useRef } from 'react';
import { Linkedin, Behance, Github } from 'react-bootstrap-icons'
import emailjs from '@emailjs/browser';

const publicKey = import.meta.env.VITE_YOUR_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_YOUR_SERVICE_ID;
const templateId = import.meta.env.VITE_YOUR_TEMPLATE_ID;

const Contact = () => {
    const form = useRef();
    console.log(publicKey);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${serviceId}`, `${templateId}`, form.current, `${publicKey}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <div className='contact-page'>
      <div className='socials'>
      <h2>My socials</h2>
      <ul className='socials-icons'>
        <li>
          <a href="https://www.linkedin.com/in/ethan-j-457b25272/" target='_blank'>
            <Linkedin/>
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/ethanjones36" target='_blank'>
            <Behance/>
          </a>
        </li>
        <li>
          <a href="https://github.com/Jon3sy" target='_blank'>
            <Github/>
          </a>
        </li>
      </ul>
    </div>
    <form ref={form} onSubmit={sendEmail}>
      <h3>Get in touch!</h3>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" id='form-button'/>
    </form>
    </div>
    </>
  );
};

export default Contact
