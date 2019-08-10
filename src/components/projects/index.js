import React from 'react';

import Grid from './grid';

import './projects.css';

const Projects = () => (
  <>
    <Grid>
      <div className="overlay">
        <svg viewBox="0 0 88 20" className="overlay_text">
          <text x="1" y="15">PROJECTS</text>
        </svg>
      </div>
      <div className="projects_item">
        <div className="proj_title_wrapper"><h2 id="pwa_barcode_scanner" className="project_title">PWA Barcode Scanner</h2></div>
        <div>
          <div><a href="https://github.com/moigonzalez/pwa-barcode-scanner">GitHub</a></div>
          <div><a href="https://pwascanit.com/">Live</a></div>
        </div>
      </div>
      <div />
      <div />
      <div />
    </Grid>
  </>
);

export default Projects;
