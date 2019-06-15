import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import apiReducer from './reducers/applicantsReducer';
import cohortsReducer from './reducers/cohortsReducer';
import thunk from 'redux-thunk';

//composeEnhancers enables redux devtools in browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//combining multiple reducers into one:
const rootReducer = combineReducers({
    applicants: apiReducer,
    cohorts: cohortsReducer
})

//composeEnhancers applies redux devtools as middleware along with thunk
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;