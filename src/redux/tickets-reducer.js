const SET_TICKETS = 'SET_TICKETS';

const initialState = {
    tickets: []
}

const ticketsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_TICKETS:
            return {
                ...state,
                tickets: [...action.tickets.slice(0, 10)]
            }

        default:
            return state;
    };

};


export const setTickets = (tickets) => ({ type: SET_TICKETS, tickets });

export default ticketsReducer;