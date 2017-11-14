import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import sessionsReducer from './session/SessionReducer';
import sessionEditReducer from './session/SessionEditReducer';

export default createStore (
    combineReducers({
        sessionsReducer,
        sessionEditReducer
    }),
    applyMiddleware (
        logger(), promise()
    )
);

