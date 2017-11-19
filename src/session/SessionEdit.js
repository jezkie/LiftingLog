import React, { Component } from 'react';
import { Form, FormGroup, Col, ControlLabel } from "react-bootstrap";
import { linkState } from '../component/linkState';
import TextInput from '../component/TextInput';
import ExerciseEdit from '../exercise/ExerciseEdit';

class SessionEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: {
                workout: '',
                description: '',
                exercises: []
            }
        }
    }

    componentWillMount() {
        console.log('Component will mount');
        const { fetchSelectedSession } = this.props;
        const { workoutId } = this.props.params;
        fetchSelectedSession(workoutId);
    }

    componentWillReceiveProps(nextProps) {
        console.log('Component will receive props', nextProps);
        this.setState((state) => ({
            ...state,
            input: {
                ...state.input,
                ...nextProps.data.session
            }
        }))
    }

    render() {
        const { input } = this.state;
        return (
            <div>
                <h1>Maintain {input.workout}</h1>
                <Form horizontal>
                    <FormGroup controlId="formWorkout">
                        <Col componentClass={ControlLabel} sm={4}>
                            Workout
                        </Col>
                        <Col sm={5}>
                            <TextInput valueLink={linkState(this, 'workout')} placeholder='Workout' type='text' />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formDescription">
                        <Col componentClass={ControlLabel} sm={4}>
                            Description
                        </Col>
                        <Col sm={5}>
                            <TextInput valueLink={linkState(this, 'description')} placeholder='Description' type='text' />
                        </Col>
                    </FormGroup>
                </Form>
                {<ExerciseEdit listOfexercises={input.exercises} _this={this} />/**/}
            </div>
        );
    }
}

export default SessionEdit;