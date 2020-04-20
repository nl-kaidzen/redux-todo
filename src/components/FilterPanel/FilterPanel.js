import React from 'react';
import FilterButtonContainer from './../FilterButtonContainer/index';
import { VisibilityFilters } from './../../redux/actionTypes'

const FilterPanel = () => {
  return(
    <section className="filter-panel">
      <FilterButtonContainer 
        filter={VisibilityFilters.SHOW_ALL}
      >
        All
      </FilterButtonContainer>
      <FilterButtonContainer 
        filter={VisibilityFilters.SHOW_ACTIVE}
      >
        Active
      </FilterButtonContainer>
      <FilterButtonContainer 
        filter={VisibilityFilters.SHOW_COMPLETED}
      >
        Completed
      </FilterButtonContainer>
    </section>
  );
}

export default FilterPanel;
