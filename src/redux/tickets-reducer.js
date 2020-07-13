import { getSearchId, getTicketsPack } from "../api/api";

const SET_TICKETS = 'SET_TICKETS';
const IS_LOADING = 'IS_LOADING';

const initialState = {
    tickets: [],
    isLoading: true
}

const ticketsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_TICKETS:
            return {
                ...state,
                tickets: [...state.tickets, ...action.tickets]
            }

        case IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

        default:
            return state;
    };

};


const setTickets = (tickets) => ({ type: SET_TICKETS, tickets });
const isLoading = (isLoading) => ({ type: IS_LOADING, isLoading });

export const getTickets = () => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        const searchId = await getSearchId();
        let isStop = false;
        while (isStop === false) {
            const response = await getTicketsPack(searchId.data.searchId);
            dispatch(setTickets(response.data.tickets));
            isStop = response.data.stop;
        }
        dispatch(isLoading(false));
    }
}

export default ticketsReducer;