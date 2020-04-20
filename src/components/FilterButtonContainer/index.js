import { connect } from 'react-redux';
import FilterButton from './../FilterButton/FilterButton.js';
import { setVisibilityFilter } from './../../redux/actionCreators'

const mapStateTopProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (filter) => dispatch(setVisibilityFilter(ownProps.filter)),
});

const FilterButtonContainer = connect(mapStateTopProps, mapDispatchToProps)(FilterButton);

export default FilterButtonContainer;
