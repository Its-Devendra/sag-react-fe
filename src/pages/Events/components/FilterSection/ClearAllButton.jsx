import React from 'react';
import PropTypes from 'prop-types';
import './ClearAllButton.css';

const ClearAllButton = ({ onClick }) => {
  return (
    <a href="#" className="filter-clear-all" onClick={onClick}>
      clear all
    </a>
  );
};

ClearAllButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ClearAllButton;
