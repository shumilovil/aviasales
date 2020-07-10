import { toogleSingleConnectionFilter, toogleAllConnectionFilter, changeDuration } from "./helpers/filters-reducer-helper";

const TOGGLE_FILTER_THERE = 'TOGGLE_FILTER_THERE';
const TOGGLE_FILTER_THERE_ALL_THERE = 'TOGGLE_FILTER_THERE_ALL_THERE';
const CHOOSE_DURATION_THERE = 'CHOOSE_DURATION_THERE';

const TOGGLE_FILTER_FROM = 'TOGGLE_FILTER_FROM';
const TOGGLE_FILTER_THERE_ALL_FROM = 'TOGGLE_FILTER_THERE_ALL_FROM';
const CHOOSE_DURATION_FROM = 'CHOOSE_DURATION_FROM';

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
    },
    from: {
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

        case TOGGLE_FILTER_THERE:
            return toogleSingleConnectionFilter(state, action, 'there');

        case TOGGLE_FILTER_THERE_ALL_THERE:
            return toogleAllConnectionFilter(state, 'there');

        case CHOOSE_DURATION_THERE:
            return changeDuration(state, action, 'there');

        case TOGGLE_FILTER_FROM:
            return toogleSingleConnectionFilter(state, action, 'from');

        case TOGGLE_FILTER_THERE_ALL_FROM:
            return toogleAllConnectionFilter(state, 'from');

        case CHOOSE_DURATION_FROM:
            return changeDuration(state, action, 'from');


        default:
            return state;
    };

};


export const toggleFilterThere = (filter) => ({ type: TOGGLE_FILTER_THERE, filter });
export const toggleallConnectionsThere = (filter) => ({ type: TOGGLE_FILTER_THERE_ALL_THERE, filter });
export const chooseDurationThere = (duration) => ({ type: CHOOSE_DURATION_THERE, duration });

export const toggleFilterFrom = (filter) => ({ type: TOGGLE_FILTER_FROM, filter });
export const toggleallConnectionsFrom = (filter) => ({ type: TOGGLE_FILTER_THERE_ALL_FROM, filter });
export const chooseDurationFrom = (duration) => ({ type: CHOOSE_DURATION_FROM, duration });

export default filtersReducer;