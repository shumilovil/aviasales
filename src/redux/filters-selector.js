import { createSelector } from "reselect";

const getTicketsFromStore = (state) => {
    return state.ticketsArea.tickets;
}

export const getMinMaxDurationThere = createSelector([getTicketsFromStore],
    (tickets) => {
        const durations = [];
        tickets.forEach(ticket => {
            durations.push(ticket.segments[0].duration)
        });
        const min = Math.floor(Math.min(...durations) / 60);
        const max = Math.ceil(Math.max(...durations) / 60);
        return ({ min, max });
    }
)