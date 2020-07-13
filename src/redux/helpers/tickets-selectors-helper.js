export const filterTickets = (filters, duration, tickets, segment) => {    
    const filteredTickets = [];

    if (filters.zeroConnections) {
        const filtered = tickets.filter(ticket => {
            return ticket.segments[segment].stops.length === 0;
        });
        filteredTickets.push(...filtered);
    }

    if (filters.oneConnection) {
        const filtered = tickets.filter(ticket => {
            return ticket.segments[segment].stops.length === 1;
        });
        filteredTickets.push(...filtered);
    }

    if (filters.twoConnections) {
        const filtered = tickets.filter(ticket => {
            return ticket.segments[segment].stops.length === 2;
        });
        filteredTickets.push(...filtered);
    }

    if (filters.threeConnections) {
        const filtered = tickets.filter(ticket => {
            return ticket.segments[segment].stops.length === 3;
        });
        filteredTickets.push(...filtered);
    }

    const filteredAndDurationTickets = filteredTickets.filter(ticket => {
        return (ticket.segments[segment].duration >= duration.min && ticket.segments[segment].duration <= duration.max)
    })

    return filteredAndDurationTickets;
}