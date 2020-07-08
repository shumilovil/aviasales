const TOGGLE_FILTER = 'TOGGLE_FILTER';
const TOGGLE_FILTER_ALL = 'TOGGLE_FILTER_ALL';
const CHOOSE_DURATION = 'CHOOSE_DURATION';

const initialState = {
    there: {
        connections: {
            zeroConnections: true,
            oneConnection: true,
            twoConnections: true,
            threeConnections: true
        },
        allConnections: true,
        durationRange: {
            min: 0,
            max: 0
        }
    }

}

const filtersReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_FILTER:
            if (state.there.connections[action.filter]) {
                return {
                    ...state,
                    there: {
                        ...state.there,
                        connections: {
                            ...state.there.connections,
                            [action.filter]: !state.there.connections[action.filter]
                        },
                        allConnections: false
                    }
                }
            }

            if (!state.there.connections[action.filter]) {
                const copyOtherFilters = { ...state.there.connections };
                delete copyOtherFilters[action.filter] // deletes current filter from copy
                const areAllOtherFiltersChecked = Object.values(copyOtherFilters).every(filter => filter === true)
                return {
                    ...state,
                    there: {
                        ...state.there,
                        connections: {
                            ...state.there.connections,
                            [action.filter]: !state.there.connections[action.filter]
                        },
                        allConnections: areAllOtherFiltersChecked ? true : false
                    }
                }
            }
            break;

        case TOGGLE_FILTER_ALL:
            if (state.there.allConnections) {
                const copyFiltersAndReset = { ...state.there.connections }
                for (let key in copyFiltersAndReset) {
                    copyFiltersAndReset[key] = false;
                }
                return {
                    ...state,
                    there: {
                        ...state.there,
                        connections: {
                            ...copyFiltersAndReset
                        },
                        allConnections: !state.there.allConnections
                    }
                }
            }

            if (!state.there.allConnections) {
                const copyFiltersAndReset = { ...state.there.connections }
                for (let key in copyFiltersAndReset) {
                    copyFiltersAndReset[key] = true;
                }
                return {
                    ...state,
                    there: {
                        ...state.there,
                        connections: {
                            ...copyFiltersAndReset
                        },
                        allConnections: !state.there.allConnections
                    }
                }
            }
            break;

        case CHOOSE_DURATION:
            return {
                ...state,
                there: {
                    ...state.there,
                    durationRange: {
                        min: action.duration.min,
                        max: action.duration.max
                        
                    }
                }
            }
            

        default:
            return state;
    };

};


export const toggleFilter = (filter) => ({ type: TOGGLE_FILTER, filter });
export const toggleallConnections = (filter) => ({ type: TOGGLE_FILTER_ALL, filter });
export const chooseDuration = (duration) => ({ type: CHOOSE_DURATION, duration });

export default filtersReducer;