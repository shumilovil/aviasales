import { Filters } from './Filters';
import { connect } from 'react-redux';
import { toggleFilterThere, toggleallConnectionsThere, setDurationThere, setDurationFrom, toggleFilterFrom, toggleallConnectionsFrom } from '../../redux/filters-reducer';
import { getMinMaxDurationThere, getMinMaxDurationFrom } from '../../redux/filters-selectors';

const mapStateToProps = (state) => {

    return {
        filtersThere: state.filtersArea.there,
        filtersFrom: state.filtersArea.from,
        minMaxDurationThere: state.ticketsArea.isLoading
            ? state.filtersArea.there.durationRange
            : getMinMaxDurationThere(state),
        minMaxDurationFrom: state.ticketsArea.isLoading
            ? state.filtersArea.from.durationRange
            : getMinMaxDurationFrom(state),
        isLoading: state.ticketsArea.isLoading
    }
}

export const FiltersContainer = connect(mapStateToProps, {
    toggleFilterThere,
    toggleallConnectionsThere,
    setDurationThere,
    toggleFilterFrom,
    toggleallConnectionsFrom,
    setDurationFrom
})(Filters);






