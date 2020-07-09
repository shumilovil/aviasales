import { Filters } from './Filters';
import { connect } from 'react-redux';
import { toggleFilter, toggleallConnections, chooseDuration } from '../../redux/filters-reducer';
import { getMinMaxDurationThere } from '../../redux/filters-selector';

const mapStateToProps = (state) => {

    return {
        filtersThere: state.filtersArea.there,
        minMaxDurationThere: getMinMaxDurationThere(state)
    }
}

export const FiltersContainer = connect(mapStateToProps, { toggleFilter, toggleallConnections, chooseDuration })(Filters);




