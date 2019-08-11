import React, { useState } from 'react';
import encode from '../../helpers/encode';

import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  // const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');


  const onSubmit = (e) => {
    e.preventDefault();
    console.log(encode({
      'form-name': 'contact', name, message,
    }));

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact', name, message,
      }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
  };

  return (
    <div className="contact_container">
      <h1 className="contact_title">Contact me</h1>
      <form name="contact" method="POST" data-netlify="true" onSubmit={onSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
          Your Name:
            {' '}
            <input type="text" name="name" onChange={e => setName(e.target.value)} />
          </label>
        </p>
        <p>
          <label>
          Message:
            {' '}
            <textarea name="message" onChange={e => setMessage(e.target.value)} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
