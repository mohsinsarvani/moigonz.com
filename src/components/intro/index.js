import React from 'react';
import './intro.css';

import Grid from './grid';

import logo from './moigonz-logo.svg';

const Intro = () => (
  <>
    {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
    <marquee className="intro_marquee">
      <h1 className="contact_title">
        <span role="img" aria-label="planet">️🌎</span>
        {' '}
          There&apos;s no planet B
        {' '}
        <span role="img" aria-label="fist">✊</span>
      </h1>
    </marquee>
    <Grid>
      <div className="image_container">
        <img src={logo} alt="moigonz logo" />
      </div>
      <div className="intro_container">
        <h1 className="title_intro">
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
        <a target="_blank" rel="noopener noreferrer" className="social_item" href="https://www.instagram.com/moi_gonz/">Instagram</a>
      </div>
    </Grid>
  </>
);

export default Intro;
