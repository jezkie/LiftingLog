import React, { Component } from 'react';

class SessionEdit extends Component {
    render() {
        const {params} = this.props;
        const {workout} = params;
        return (
            <div>
                <h1>Selected workout {workout}</h1>
            </div>
        );
    }
}

export default SessionEdit;