import React from 'react';
import PropTypes from 'prop-types';

import './grid.css';

const Grid = ({ children }) => (
  <div className="grid_container_2">
    {children}
  </div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
