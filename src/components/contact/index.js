import React from 'react';

import './contact.css';

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data,
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
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
          Message:
            {' '}
            <textarea name="message" />
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
