import { connect } from 'react-redux';
import { fetchSessions } from './SessionAction';
import Home from '../app/Home';

const mapStateToProps = (state) => {
    console.log(state);
    return { data: state.sessionsReducer };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSessions: () => {
            dispatch(fetchSessions());
        }
    }
}

const SessionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(Home)
export default SessionsContainer;