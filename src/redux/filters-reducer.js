import { toogleSingleConnectionFilter, toogleAllConnectionFilter, changeDuration } from "./helpers/filters-reducer-helper";

const TOGGLE_FILTER_THERE = 'TOGGLE_FILTER_THERE';
const TOGGLE_FILTER_ALL_THERE = 'TOGGLE_FILTER_ALL_THERE';
const SET_DURATION_THERE = 'SET_DURATION_THERE';

const TOGGLE_FILTER_FROM = 'TOGGLE_FILTER_FROM';
const TOGGLE_FILTER_ALL_FROM = 'TOGGLE_FILTER_ALL_FROM';
const SET_DURATION_FROM = 'SET_DURATION_FROM';

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
            max: 1000000
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
            max: 1000000
        }
    }

}


const filtersReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_FILTER_THERE:
            return toogleSingleConnectionFilter(state, action, 'there');

        case TOGGLE_FILTER_ALL_THERE:
            return toogleAllConnectionFilter(state, 'there');

        case SET_DURATION_THERE:
            return changeDuration(state, action, 'there');

        case TOGGLE_FILTER_FROM:
            return toogleSingleConnectionFilter(state, action, 'from');

        case TOGGLE_FILTER_ALL_FROM:
            return toogleAllConnectionFilter(state, 'from');

        case SET_DURATION_FROM:
            return changeDuration(state, action, 'from');


        default:
            return state;
    };

};


export const toggleFilterThere = (filter) => ({ type: TOGGLE_FILTER_THERE, filter });
export const toggleallConnectionsThere = (filter) => ({ type: TOGGLE_FILTER_ALL_THERE, filter });
export const setDurationThere = (duration) => ({ type: SET_DURATION_THERE, duration });

export const toggleFilterFrom = (filter) => ({ type: TOGGLE_FILTER_FROM, filter });
export const toggleallConnectionsFrom = (filter) => ({ type: TOGGLE_FILTER_ALL_FROM, filter });
export const setDurationFrom = (duration) => ({ type: SET_DURATION_FROM, duration });

export default filtersReducer;