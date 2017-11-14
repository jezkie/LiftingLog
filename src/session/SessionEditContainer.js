import { connect } from 'react-redux';
import { fetchSelectedSession } from './SessionAction';
import SessionEdit from './SessionEdit';

const mapStateToProps = (state) => {
    return { data: state.sessionEditReducer };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSelectedSession: (workout) => {
            dispatch(fetchSelectedSession(workout));
        }
    }
}

const SessionEditContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(SessionEdit)
export default SessionEditContainer;