import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Ensure this is updated to use Tailwind classes or converted to Tailwind if needed

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
        <input 
          type="text" 
          name="user_name" 
          placeholder="Enter Your Name" 
          required 
          className="outline-none border p-2 mb-4"
        />
        <input 
          type="email" 
          name="user_email" 
          placeholder="Enter a valid email address" 
          required 
          className="outline-none border p-2 mb-4"
        />
        <textarea 
          name="message" 
          placeholder="Enter Your Message" 
          required 
          className="outline-none border p-2 mb-4"
        ></textarea>
        <button 
          type="submit" 
          className="btn-submit bg-blue-500 text-white p-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
        {error && <p className="error text-red-500">{error}</p>}
        {success && <p className="success text-green-500">{success}</p>}
      </form>
    </section>
  );
};

export default Contact;
