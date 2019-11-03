import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import auth from './auth/authReducer';

const rootReducer = combineReducers({auth});

const middleware = [logger];
const enhancers = applyMiddleware(...middleware);

export default createStore(rootReducer, enhancers);