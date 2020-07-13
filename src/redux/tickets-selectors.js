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

const getFilteredTicketsFrom = createSelector([getConnectionsFrom, getDurationFrom, getFilteredTicketsThere, isLoading],
    (filters, duration, tickets, isLoadingStatus) => {
        if (isLoadingStatus) {
            return tickets;
        }                       
        return filterTickets(filters, duration, tickets, 1);      
    }
);


export const getProcessedTickets = createSelector([getFilteredTicketsFrom],
    (tickets) => {
                
        const processedTickets = tickets.map(ticket => {

            return {
                ...ticket,
                priceConverted: ticket.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "), //Converts price

                segments: ticket.segments.map(segment => {
                    //Converts date
                    const date = new Date(segment.date)
                    const year = date.getFullYear();
                    const month = ('00' + (date.getMonth() + 1)).slice(-2);
                    const day = ('00' + date.getDate()).slice(-2);
                    const hour = ('00' + date.getHours()).slice(-2);
                    const minute = ('00' + date.getMinutes()).slice(-2);

                    const dateConverted = `${day}.${month}.${year}`;
                    const timeConverted = `${hour}:${minute}`;

                    //Converts duration
                    const durationHours = Math.trunc(segment.duration / 60);
                    const durationMinutes = segment.duration % 60;
                    const durationConverted = `${durationHours}ч ${durationMinutes}м`;

                    return {
                        ...segment,
                        dateConverted: dateConverted,
                        timeConverted: timeConverted,
                        durationConverted: durationConverted

                    }
                })
            }
        })

        return processedTickets;
    }
)