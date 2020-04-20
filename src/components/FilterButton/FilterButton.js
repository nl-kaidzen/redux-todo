import React from 'react';
import PropTypes from 'prop-types';

const FilterButton = ({ active, children, onClick}) => {
  return(
    <button
      onClick={onClick}
      className={ active ? 'filter-button active' : 'filter-button' }
    >
      {children}
    </button>
  );
}

FilterButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default FilterButton