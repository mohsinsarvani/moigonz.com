/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import './masonry.css';

const Masonry = ({ edges }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="masonry-grid">
      {edges.map(({ node }, i) => {
        const { frontmatter } = node;
        const {
          title, description, image, date,
        } = frontmatter;

        return (
          <article
            key={title}
            style={{ transitionDelay: `${i * 100}ms` }}
            className={['masonry-card', loaded ? 'visible' : ''].join(' ')}
          >
            <img className="masonry-image" src={image} alt={description} />
            <div className="masonry-details">
              <h3>{title}</h3>
              <div>{new Date(date).toDateString()}</div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Masonry;
