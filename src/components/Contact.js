import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [ sent, setSent ] = useState(false);
  const form = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID);
    setSent(true);
    e.target.reset();
  };

  return (
    <div id="contact">
      <form ref={form} onSubmit={handleSubmit}> 
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea type="text" name="message" required></textarea>
        </div>
        <button className={sent ? 'sent-btn' : 'send-btn' } type="submit" value="send">{sent ? 'Thank you' : 'Send'}</button>
      </form>
    </div>
  )
}

export default Contact;