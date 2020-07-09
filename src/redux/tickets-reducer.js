import { getSearchId, getTicketsPack } from "../api/api";

const SET_TICKETS = 'SET_TICKETS';

const initialState = {
    tickets: []
}

const ticketsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_TICKETS:
            return {
                ...state,
                tickets: [...state.tickets, ...action.tickets]
            }

        default:
            return state;
    };

};


const setTickets = (tickets) => ({ type: SET_TICKETS, tickets });

export const getTickets = () => {
    return async (dispatch) => {
        const searchId = await getSearchId();
        let isStop = false;
        while (isStop === false) {
            const response = await getTicketsPack(searchId.data.searchId);
            dispatch(setTickets(response.data.tickets));
            isStop = response.data.stop;
        }
    }
}

export default ticketsReducer;