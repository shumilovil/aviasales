import { combineReducers, createStore } from "redux";
import ticketsReducer from "./tickets-reducer";

const reducers = combineReducers({
    ticketsPage: ticketsReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
