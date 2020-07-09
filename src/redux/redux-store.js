import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import ticketsReducer from "./tickets-reducer";
import filtersReducer from "./filters-reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    ticketsArea: ticketsReducer,
    filtersArea: filtersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;


