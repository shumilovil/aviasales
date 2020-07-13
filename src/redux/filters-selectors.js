import { createSelector } from "reselect";
import { countMinMax } from "./helpers/filters-selectors-helper";

const getTicketsFromStore = (state) => {
    return state.ticketsArea.tickets;
}

export const getMinMaxDurationThere = createSelector([getTicketsFromStore],    
    (tickets) => {
        return countMinMax(tickets, 0);
    }
)

export const getMinMaxDurationFrom = createSelector([getTicketsFromStore],
    (tickets) => {
        return countMinMax(tickets, 1);
    }
)