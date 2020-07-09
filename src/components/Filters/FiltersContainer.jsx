import { Filters } from './Filters';
import { connect } from 'react-redux';
import { toggleFilterThere, toggleallConnectionsThere, chooseDurationThere, chooseDurationFrom, toggleFilterFrom, toggleallConnectionsFrom } from '../../redux/filters-reducer';
import { getMinMaxDurationThere, getMinMaxDurationFrom } from '../../redux/filters-selectors';

const mapStateToProps = (state) => {

    return {
        filtersThere: state.filtersArea.there,
        filtersFrom: state.filtersArea.from,
        minMaxDurationThere: getMinMaxDurationThere(state),
        minMaxDurationFrom: getMinMaxDurationFrom(state)
    }
}

export const FiltersContainer = connect(mapStateToProps, {
    toggleFilterThere,
    toggleallConnectionsThere,
    chooseDurationThere,
    toggleFilterFrom,
    toggleallConnectionsFrom,
    chooseDurationFrom
})(Filters);






