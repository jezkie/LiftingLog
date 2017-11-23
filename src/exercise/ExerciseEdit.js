import React from 'react';
import { linkExerciseState } from '../component/linkState';
import TextInput from '../component/TextInput';
import InlineText from '../component/InlineText';
import { Form, FormGroup, Col, ControlLabel, Panel, Grid, Row } from 'react-bootstrap';

const ExerciseEdit = ({ listOfexercises, _this }) => {
    let exercises = listOfexercises.map((exercise, i) => {
        let panelHeader = (
            <Row>
                <Col>
                    <InlineText valueLink={linkExerciseState(_this, 'name', i)} />
                </Col>
            </Row>
        );
        return (
            <Row key={`${exercise.name}${i}`}>
                <Col lg={8} lgOffset={2}>
                    <Panel header={panelHeader}>
                        <Form horizontal={false}>
                            <Col lgOffset={1}>
                            <FormGroup controlId={`formSets${i}`}>
                                <Col componentClass={ControlLabel} lg={2}>
                                    Sets
                                </Col>
                                <Col lg={3}>
                                    <TextInput valueLink={linkExerciseState(_this, 'sets', i)} type='number' />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId={`formReps${i}`}>
                                <Col componentClass={ControlLabel} lg={2}>Reps</Col>
                                <Col lg={3}>
                                    <TextInput valueLink={linkExerciseState(_this, 'reps', i)} type='number' />
                                </Col>
                            </FormGroup>
                            </Col>
                        </Form>
                    </Panel>
                </Col>
            </Row>
        )
    })

    return (
        <Grid>
            {exercises ? exercises : null}
        </Grid>
    )
};

export default ExerciseEdit;