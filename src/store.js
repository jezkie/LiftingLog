import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import sessionsReducer from './session/SessionReducer';

export default createStore (
    combineReducers({
        sessionsReducer
    }),
    applyMiddleware (
        logger(), promise()
    )
);

