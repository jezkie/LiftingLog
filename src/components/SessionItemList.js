import React from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap/lib';

const SessionItemList = ({listOfSessions, handleEdit}) => {
  let sessions = listOfSessions.map((session, i) => {
    return (
      <Col xs={6} md={4} key={i}>
        <Thumbnail src={session.imgUrl} alt="242x200">
          <h3>{session.workout}</h3>
          <p>{session.description}</p>
          <p>
            <Button bsStyle="primary" onClick={handleEdit.bind(null, session)}>Edit</Button>&nbsp;
            <Button bsStyle="default">Start</Button>
          </p>
        </Thumbnail>
      </Col>
    )
  })

  return (
    <Grid>
    <Row>
      {sessions}
    </Row>
  </Grid>
  )
}

export default SessionItemList;
