import React, { Component } from 'react';
import SessionThumbnail from '../session/SessionThumbnail';
import SessionEditModal from '../session/SessionEditModal';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      selectedSession: null
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(selectedSession) {
    console.log(selectedSession);
    this.setState({
      modalIsOpen: true,
      selectedSession: selectedSession
    });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    const { fetchSessions } = this.props;
    fetchSessions();
    console.log(this.props);
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <SessionThumbnail listOfSessions={data.sessions} handleEdit={this.openModal} />
        <SessionEditModal closeModal={this.closeModal} showModal={this.state.modalIsOpen} session={this.state.selectedSession} />
      </div>
    );
  }
}

export default Home;
