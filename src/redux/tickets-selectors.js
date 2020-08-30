import { createSelector } from "reselect";
import { filterTickets } from "./helpers/tickets-selectors-helper";

const isLoading = (state) => {
    return state.ticketsArea.isLoading;
}

const getTicketsFromStore = (state) => {
    return state.ticketsArea.tickets;
}

const getConnectionsThere = (state) => {
    return state.filtersArea.there.connections;
}

const getDurationThere = (state) => {
    return state.filtersArea.there.durationRange;
}

const getConnectionsFrom = (state) => {
    return state.filtersArea.from.connections;
}

const getDurationFrom = (state) => {
    return state.filtersArea.from.durationRange;
}



const getFilteredTicketsThere = createSelector([getConnectionsThere, getDurationThere, getTicketsFromStore, isLoading],
    (filters, duration, tickets, isLoadingStatus) => {        
        if (isLoadingStatus) {
            return tickets;
        }
        return filterTickets(filters, duration, tickets, 0);      
    }
);

export const getFilteredTicketsFrom = createSelector([getConnectionsFrom, getDurationFrom, getFilteredTicketsThere, isLoading],
    (filters, duration, tickets, isLoadingStatus) => {
        if (isLoadingStatus) {
            return tickets;
        }                       
        return filterTickets(filters, duration, tickets, 1);      
    }
);
