import React from 'react';

import Grid from './grid';
import Project from './project';

import './projects.css';

const Projects = () => (
  <>
    <Grid>
      <div className="overlay">
        <svg viewBox="0 0 88 20" className="overlay_text">
          <text x="1" y="15">PROJECTS</text>
        </svg>
      </div>
      <Project
        title={<h2 id="pwa_barcode_scanner" className="project_title">PWA Barcode Scanner</h2>}
        links={[
          {
            text: 'GitHub',
            link: 'https://github.com/moigonzalez/pwa-barcode-scanner',
          },
          {
            text: 'Live',
            link: 'https://pwascanit.com/',
          },
        ]}
      />
      <div />
      <div />
      <Project
        title={<h2 id="parrotify_cli" className="project_title">parrotify-cli</h2>}
        links={[
          {
            text: 'GitHub',
            link: 'https://github.com/moigonzalez/parrotify-cli',
          },
          {
            text: 'NPM',
            link: 'https://www.npmjs.com/package/parrotify-cli',
          },
        ]}
      />
    </Grid>
  </>
);

export default Projects;