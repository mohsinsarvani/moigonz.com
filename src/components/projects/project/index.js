import React from 'react';
import PropTypes from 'prop-types';

const Project = (props) => {
  const { title, links } = props;

  return (
    <div className="projects_item">
      <div className="proj_title_wrapper">{title}</div>
      <div className="proj_links_wrapper">
        {links.map(x => (
          <a className="proj_link_wrapper" href={x.link} target="_blank" rel="noopener noreferrer">
            <div className="proj_link">
              {x.text}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Project;
