import React, { Component } from 'react';

import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap/lib/';

class SessionEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onEnter(){
    console.log(this.props);
    this.setState({
      workout: this.props.session.workout
    });
  }

  handleChange(e) {
    this.setState({
      workout: e.target.value
    });
    console.log(this.state.workout);
  }

  render() {
    return (
      <div>
        {
          <Modal show={this.props.showModal} onHide={this.props.closeModal} onEnter={this.onEnter}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">{this.props.session !==null ? this.props.session.workout: 'Loading...' }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              { this.props.session !== null ?
                <form>
                  <FormGroup controlId='fromGroup1'>
                    <ControlLabel>workout</ControlLabel>
                    <FormControl
                      type='text'
                      placeholder='Enter text'
                      value={this.state.workout}
                      onChange={(e) => this.handleChange(e)}/>
                    <FormControl.Feedback />
                  </FormGroup>
                </form>
                : null
              }
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.closeModal}>Close</Button>
            </Modal.Footer>
          </Modal>
      /*
      <Modal isOpen={showModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal">
          <Button onClick={closeModal}>Close</Button>
          <h2 >Hello</h2>
        </Modal>*/
        }
      </div>
    )
  }
}

export default SessionEditModal;
