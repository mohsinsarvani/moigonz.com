import React, { useState } from 'react';
import encode from '../../helpers/encode';

import './contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact', email, message,
      }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
  };

  return (
    <div className="contact_container">
      {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
      <marquee><h1 className="contact_title">Contact me</h1></marquee>
      <form className="contact_form" name="contact" action="/" method="POST" data-netlify="true" onSubmit={onSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div className="contact_inputs_wrapper">
          <div>
            <label className="input_wrapper" htmlFor="email">
              <span className="contact_label">E-mail</span>
              <input className="contact_input" id="email" type="email" name="email" onChange={e => setEmail(e.target.value)} required palceholder="anexample@email.com" />
            </label>
          </div>
          <div>
            <label className="input_wrapper" htmlFor="message">
              <span className="contact_label">Message</span>
              <textarea className="contact_input" id="message" name="message" onChange={e => setMessage(e.target.value)} required placeholder="Hey there!" />
            </label>
          </div>
        </div>
        <div>
          <button className="contact_button" type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
