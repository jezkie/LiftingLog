import * as firebase from 'firebase';

const initialState = {
    sessions: []
}

function sessionsReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_SESSIONS':
            return {...state, sessions: action.payload.sessions};
        default:
            return state;
    }
}

export default sessionsReducer;