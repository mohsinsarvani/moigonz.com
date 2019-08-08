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
      <a className="social_item" href="https://github.com/moigonzalez/">GitHub</a>
      <div className="social_item">LinkedIn</div>
      <div className="social_item">e-mail</div>
      <div className="social_item">
        Insta
        <br />
        gram
      </div>
    </div>
  </>
);

export default Intro;
