const TOGGLE_FILTER = 'TOGGLE_FILTER';
const TOGGLE_FILTER_ALL = 'TOGGLE_FILTER_ALL';
const SET_TICKETS = 'SET_TICKETS';

const initialState = {
    tickets: [],
    filters: {
        zeroConnections: true,
        oneConnection: true,
        twoConnections: true,
        threeConnections: true
    },
    filterAll: true
}

const ticketsReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_FILTER:
            if (state.filters[action.filter]) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        [action.filter]: !state.filters[action.filter]
                    },
                    filterAll: false
                }
            }


            if (!state.filters[action.filter]) {
                const copyOtherFilters = { ...state.filters };
                delete copyOtherFilters[action.filter] // deletes current filter from copy
                const areAllOtherFiltersChecked = Object.values(copyOtherFilters).every(filter => filter === true)
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        [action.filter]: !state.filters[action.filter]
                    },
                    filterAll: areAllOtherFiltersChecked ? true : false
                }
            }
            break;

        case TOGGLE_FILTER_ALL:
            if (state.filterAll) {
                const copyFiltersAndReset = { ...state.filters }
                for (let key in copyFiltersAndReset) {
                    copyFiltersAndReset[key] = false;
                }
                return {
                    ...state,
                    filterAll: !state.filterAll,
                    filters: {
                        ...copyFiltersAndReset
                    }
                }
            }

            if (!state.filterAll) {
                const copyFiltersAndReset = { ...state.filters }
                for (let key in copyFiltersAndReset) {
                    copyFiltersAndReset[key] = true;
                }
                return {
                    ...state,
                    filterAll: !state.filterAll,
                    filters: {
                        ...copyFiltersAndReset
                    }
                }
            }
            break;

        case SET_TICKETS:
            return {
                ...state,
                tickets: [...action.tickets.slice(0, 10)]
            }
            

        default:
            return state;
    };

};


export const toggleFilter = (filter) => ({ type: TOGGLE_FILTER, filter });
export const toggleFilterAll = (filter) => ({ type: TOGGLE_FILTER_ALL, filter });
export const setTickets = (tickets) => ({ type: SET_TICKETS, tickets });

export default ticketsReducer;