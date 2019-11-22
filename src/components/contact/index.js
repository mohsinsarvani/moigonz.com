import React, { useState } from 'react';
import encode from '../../helpers/encode';

import './contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact', email, message,
      }),
    })
      .then(() => setSuccess(true))
      .catch(error => alert(error));
  };

  return (
    <div className="contact_container">
      {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
      <marquee>
        <h1 className="contact_title">
          <span role="img" aria-label="mail">✉️</span>
          {' '}
        Contact me
          {' '}
          <span role="img" aria-label="post">📬</span>
        </h1>
      </marquee>
      <form className="contact_form" name="contact" action="/" method="POST" data-netlify="true" onSubmit={onSubmit} netlify-honeypot="bot-field">
        <p className="contact_hidden">
          <input name="bot-field" />
        </p>
        <input type="hidden" name="form-name" value="contact" />
        <div className="contact_inputs_wrapper">
          <div>
            <label className="input_wrapper" htmlFor="email">
              <span className="contact_label">E-mail</span>
              <input disabled={success} className="contact_input" id="email" type="email" name="email" onChange={e => setEmail(e.target.value)} required placeholder="example@email.com" />
            </label>
          </div>
          <div>
            <label className="input_wrapper" htmlFor="message">
              <span className="contact_label">Message</span>
              <textarea disabled={success} className="contact_input" id="message" name="message" onChange={e => setMessage(e.target.value)} required placeholder="Hey there!" />
            </label>
          </div>
        </div>
        <div>
          <button className="contact_button" type="submit" disabled={success}>
            {!success
              ? (
                <>
                  <span className="contact_button_img" role="img" aria-label="empty-letterbox">📭</span>
                  Send
                </>
              )
              : (
                <>
                  <span className="contact_button_img" role="img" aria-label="full-letterbox">📬</span>
                  Success!
                </>
              )
            }
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
