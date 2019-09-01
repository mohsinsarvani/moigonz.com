import React from 'react';

import frontendComposition from './files/frontend_composition.pdf';
import lsg from './files/lsg.pdf';
import pwa from './files/pwa.pdf';

import Presentation from './presentation';

import './presentations.css';

const Presentations = () => (
  <section className="presentations_container">
    <h1 className="presentations_title">Presentations</h1>
    <div>
      <Presentation title="Living Style Guides (LSG)" url={lsg} subline="What they are and why you need one" />
      <Presentation title="Progressive Web Apps (PWA)" url={pwa} subline="The future of the (mobile)web" />
      <Presentation title="Frontend Composition" url={frontendComposition} subline="Microfrontends" />
    </div>
  </section>
);

export default Presentations;
