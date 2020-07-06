import { combineReducers, createStore } from "redux";
import ticketsReducer from "./tickets-reducer";

const reducers = combineReducers({
    ticketsPage: ticketsReducer
})

const store = createStore(reducers);

export default store;
