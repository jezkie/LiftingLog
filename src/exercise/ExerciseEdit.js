import React from 'react';
import { linkExerciseState } from '../component/linkState';
import TextInput from '../component/TextInput';
import { Form, FormGroup, Col, ControlLabel, Panel, Grid, Row } from "react-bootstrap";

const ExerciseEdit = ({ listOfexercises, _this }) => {
    let exercises = listOfexercises.map((exercise, i) => {
        return (
            <Col sm={8} smOffset={2} key={i}>
                <Panel header={exercise.name} bsStyle="primary">
                    <Form horizontal>
                        <FormGroup controlId={`formSets${i}`}>
                            <Col componentClass={ControlLabel} sm={1}>
                                Sets
                                        </Col>
                            <Col sm={3}>
                                <TextInput valueLink={linkExerciseState(_this, 'sets', i)} type='number' />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId={`formReps${i}`}>
                            <Col componentClass={ControlLabel} sm={1}>
                                Reps
                                        </Col>
                            <Col sm={3}>
                                <TextInput valueLink={linkExerciseState(_this, 'reps', i)} type='number' />
                            </Col>
                        </FormGroup>
                    </Form>
                </Panel>
            </Col>
        )
    })

    return (
        <Grid>
            <Row>
                {exercises ? exercises : null}
            </Row>
        </Grid>
    )
};

export default ExerciseEdit;