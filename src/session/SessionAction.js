import fire from '../conf/fire';

export function fetchSessions() {
    const sessionRef = fire.database().ref().child('sessions');
    return (
        dispatch => {
            sessionRef.on('value', snap => {
                dispatch({
                    type: 'GET_SESSIONS',
                    payload: {
                        sessions: snap.val(),
                        selectedSession: null,
                        modalIsOpen: false
                    }
                });
            });
        }
    ) 
}

export function fetchSelectedSession(workoutId) {
    return {
        type: 'GET_SELECTED_SESSION',
        payload: workoutId
    }
}