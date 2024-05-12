import React, { useState } from 'react';
import "./Contact.css";

export const Contacts = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate name and email
    if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
      setErrorMessage('😞 Name,Phone and email are required!!');
      return;
    } else {
      setErrorMessage('');
    }

    setSending(true);

    // Send email using SMTP.js
    window.Email.send({
      SecureToken: "2aecfffc-c1ac-4237-9f72-35a72ac2ee3d",
      To: 'viraltechnologies.in@gmail.com', // Replace with your email
      From: email,
      Subject: "New Inquiry",
      Body: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
    }).then(
      (response) => {
        setSending(false);
        setSuccess(true);
        console.log('Email sent successfully!', response);
      },
      (error) => {
        setSending(false);
        console.error('Error sending email:', error);
      }
    );
  };

  return (
    <section className="contact section-contact" id="contact">
      <h2 className='section_title font-bold mb-4'>Get in touch</h2>
      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to us</h3>
          <div className="contact_info">

            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>

              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">contactus@viraltechnologies.in</span>

              <a href="mailto:contactus@viraltechnologies.in" className="contact_button">Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card-icon"></i>

              <h3 className="contact_card-title">Whatsapp</h3>
              <span className="contact_card-data">9389486561</span>

              <a href="https://api.whatsapp.com/send?phone=9389486561&text=Hii!!" className="contact_button">Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
            </div>

          </div>
        </div>

        <div className="contact_content">
          <form className="contact_form" onSubmit={handleFormSubmit}>
            <div className="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input type="text" name='name' className="contact_form-input" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="contact_form-div">
              <label className="contact_form-tag">Phone Number</label>
              <input type="number" name='phone' className="contact_form-input" placeholder='Enter your phone number' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div className="contact_form-div">
              <label className="contact_form-tag">Mail</label>
              <input type="email" name='email' className="contact_form-input" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag">Message</label>
              <textarea name="message" cols="30" rows="10" className='contact_form-input' placeholder='Enter your message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>

            {errorMessage && <div className="error-message text-orange-500	font-bold mb-4">{errorMessage}</div>}

            <button type="submit" className="button button--flex bg-black hover:bg-blue-800">
              {sending ? <i className="bx bx-loader bx-spin"></i> : 'Send message'} <i className="bx bx-right-arrow-alt contact_button-icon"></i>
            </button>

            {success && <div className="success-message text-green-500	font-bold mt-4">😊 Mail sent successfully!</div>}
          </form>
        </div>

      </div>

    </section>
  )
}
