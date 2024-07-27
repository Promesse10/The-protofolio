import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    emailjs.sendForm('service_f04qg4p', 'template_ne6rzch', e.target as HTMLFormElement, 'yjDmZVG90i3oxo4s5')
      .then((result) => {
        setLoading(false);
        setSuccess('Your message has been sent successfully!');
      }, (error) => {
        setLoading(false);
        setError('There was an error sending your message. Please try again.');
      });
  };

  return (
    <section className="contact">
      <div className='lines'>
        <img src="image/three-line.png" alt="" />
        <img src="image/three-line-2.png" alt="" />
      </div>
      <h2>Get in Touch</h2>
     
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Enter Your Name" required />
        <input type="email" name="email" placeholder="Enter a valid email address" required />
        <textarea name="message" placeholder="Enter Your Message" required></textarea>
        <button type="submit" className="btn-submit" disabled={loading}>
          {loading ? 'Sending...' : 'Submit'}
        </button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </section>
  );
};

export default Contact;
