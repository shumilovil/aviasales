import { combineReducers, createStore } from "redux";
import ticketsReducer from "./tickets-reducer";
import filtersReducer from "./filters-reducer";

const reducers = combineReducers({
    ticketsArea: ticketsReducer,
    filtersArea: filtersReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
