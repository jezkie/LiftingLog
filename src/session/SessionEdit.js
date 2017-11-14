import React, { Component } from 'react';

class SessionEdit extends Component {

    componentDidMount() {
        const { fetchSelectedSession } = this.props;
        const { workout } = this.props.params;

        fetchSelectedSession(workout);
    }

    render() {
        const { data } = this.props;
        const { workout } = data.session;
        return (
            <div>
                <h1>Selected workout {data == null ? 'Loading' : workout}</h1>
            </div>
        );
    }
}

export default SessionEdit;