import React from 'react';
import PropTypes from 'prop-types';

import './presentation.css';

const Presentation = ({ title, url, subline }) => (
  <div className="presentation_container">
    <h2 className="presentation_title">{title}</h2>
    <p className="presentation_subline"><i>{subline}</i></p>
    <a className="presentation_anchor" title={`👀 Open ${url}`} href={url} target="_blank" rel="noopener noreferrer">
      <span role="img" aria-label="document">📄</span>
    </a>
  </div>
);

Presentation.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  subline: PropTypes.string.isRequired,
};

export default Presentation;
