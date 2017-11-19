import React, { Component } from 'react';
import { Form, FormGroup, Col, ControlLabel, PageHeader } from "react-bootstrap";
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
                <PageHeader><small>Maintain</small> {input.workout}</PageHeader>
                <Form horizontal>
                    <Col lg={8} lgOffset={3}>
                        <FormGroup controlId="formWorkout">
                            <Col componentClass={ControlLabel} lg={3}>
                                Workout
                            </Col>
                            <Col lg={3}>
                                <TextInput valueLink={linkState(this, 'workout')} placeholder='Workout' type='text' />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formDescription">
                            <Col componentClass={ControlLabel} lg={3}>
                                Description
                            </Col>
                            <Col lg={3}>
                                <TextInput valueLink={linkState(this, 'description')} placeholder='Description' type='text' />
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
                {<ExerciseEdit listOfexercises={input.exercises} _this={this} />/**/}
            </div>
        );
    }
}

export default SessionEdit;