import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SessionThumbnail from './components/SessionThumbnail';
import SessionEditModal from './components/SessionEditModal';
import { Button } from 'react-bootstrap/lib';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: [
        {
          id: 1,
          imgUrl: "https://i2.wp.com/casinofitness.com/wp-content/uploads/2017/06/how-to-bench-press-for-beginners.jpg?resize=225%2C225&ssl=1",
          workout:"Chest Day",
          description: "Bench etc..."
        },
        {
          id: 2,
          imgUrl: "http://cdn-mf1.heartyhosting.com/sites/mensfitness.com/files/styles/gallery_slideshow_thumb_desktop/public/30-best-back-workouts-yates-row.jpg?itok=OyZm0NAW",
          workout:"Back Day",
          description: "Row, Pullups"
        },
        {
          id: 3,
          imgUrl: "http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/styles/gallery_slideshow_thumb_desktop/public/_main_deadlift_1.jpg?itok=JUKDHbv5",
          workout:"Leg Day",
          description: "Squat etc..."
        },

      ],
      selectedSession: null,
      modalIsOpen: false,
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
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <SessionThumbnail listOfSessions={this.state.sessions} handleEdit={this.openModal}/>
        <SessionEditModal closeModal={this.closeModal} showModal={this.state.modalIsOpen} session={this.state.selectedSession} />
      </div>
    );
  }
}

export default App;
