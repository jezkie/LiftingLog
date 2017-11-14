import React from 'react';
import NavBar from './NavBar';
import logo from '../logo.svg';
import '../App.css';

const Main = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <NavBar />
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default Main;