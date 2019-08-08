import React from 'react';
import './intro.css';

import Image from '../image';

const Intro = () => (
  <>
    <div className="image_container">
      <Image />
    </div>
    <div className="intro_container">
      <h1>
        Hi! I&apos;m Moises Gonzalez. I&apos;m based in
        {' '}
        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Berlin">Berlin</a>
        {' '}
        and I do computer stuff.
      </h1>
    </div>
    <div className="social_container">
      <a target="_blank" rel="noopener noreferrer" className="social_item" href="https://github.com/moigonzalez/">GitHub</a>
      <a target="_blank" rel="noopener noreferrer" className="social_item" href="https://www.linkedin.com/in/moises-gonzalez-56969b78/">LinkedIn</a>
      <a className="social_item" href="mailto:moigonzit@gmail.com">e-mail</a>
      <a target="_blank" rel="noopener noreferrer" className="social_item" href="https://www.instagram.com/moi_gonz/">
        Insta-
        <br />
        gram
      </a>
    </div>
  </>
);

export default Intro;
