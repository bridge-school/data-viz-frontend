import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

//composeEnhancers enables redux devtools in browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//composeEnhancers applies redux devtools as middleware along with thunk
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;