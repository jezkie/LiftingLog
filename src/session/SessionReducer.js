const initialState = {
    sessions: [],
    selectedSession: null,
    modalIsOpen: false
}

function sessionsReducer(state = initialState, action) {
    let sessions;

    switch (action.type) {
        case 'GET_SESSIONS':
            return {...state, sessions: action.payload.sessions};
        default:
            return state;
    }
}

export default sessionsReducer;