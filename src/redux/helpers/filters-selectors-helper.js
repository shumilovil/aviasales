export const countMinMax = (tickets, segment) => {
    const durations = [];
    if (tickets.length === 0) {
        return ({ min: 0, max: 1000000 })
    };

    tickets.forEach(ticket => {
        durations.push(ticket.segments[segment].duration)
    });
    const min = Math.floor(Math.min(...durations) / 60);
    const max = Math.ceil(Math.max(...durations) / 60);
    return ({ min, max });
};