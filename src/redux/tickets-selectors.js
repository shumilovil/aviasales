import { createSelector } from "reselect";

const getTicketsFromStore = (state) => {
    return state.ticketsArea.tickets;
}

const getFiltersParams = (state) => {
    return state.filtersArea.there.connections;
}

const getFilteredTickets = createSelector([getFiltersParams, getTicketsFromStore],

    (filters, tickets) => {
        
        const filteredTickets = [];

        if (filters.zeroConnections) {
            const filtered = tickets.filter(ticket => {
                return ticket.segments[0].stops.length === 0;
            });
            filteredTickets.push(...filtered);
        }

        if (filters.oneConnection) {
            const filtered = tickets.filter(ticket => {
                return ticket.segments[0].stops.length === 1;
            });
            filteredTickets.push(...filtered);
        }

        if (filters.twoConnections) {
            const filtered = tickets.filter(ticket => {
                return ticket.segments[0].stops.length === 2;
            });
            filteredTickets.push(...filtered);
        }

        if (filters.threeConnections) {
            const filtered = tickets.filter(ticket => {
                return ticket.segments[0].stops.length === 3;
            });
            filteredTickets.push(...filtered);
        }

        return filteredTickets;
    }
);

export const getProcessedTickets = createSelector([getFilteredTickets],

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
                    const durationHours = Math.trunc(segment.duration / 60);                
                    const durationMinutes = segment.duration % 60;
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