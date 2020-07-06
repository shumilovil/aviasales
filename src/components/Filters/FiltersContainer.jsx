import { Filters } from './Filters';
import { connect } from 'react-redux';
import { toggleFilter, toggleFilterAll } from '../../redux/tickets-reducer';

const mapStateToProps = (state) => {

    return {
        filters: state.ticketsPage.filters,
        filterAll: state.ticketsPage.filterAll
    }
}

export const FiltersContainer = connect(mapStateToProps, {toggleFilter, toggleFilterAll})(Filters);


