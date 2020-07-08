import { Filters } from './Filters';
import { connect } from 'react-redux';
import { toggleFilter, toggleallConnections, chooseDuration } from '../../redux/filters-reducer';

const mapStateToProps = (state) => {

    return {
        filtersThere: state.filtersArea.there
    }
}

export const FiltersContainer = connect(mapStateToProps, {toggleFilter, toggleallConnections, chooseDuration})(Filters);




