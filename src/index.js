import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import SessionStore from './store'
import { Provider } from 'react-redux';

import './index.css';
import Main from './app/Main';
import SessionEditContainer from './session/SessionEditContainer';
import SessionContainer from './session/SessionContainer';

import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase';

const fircnf = {
    apiKey: "AIzaSyAaTS7m_qGPDWrmOQKzhacLaFUasUKY_PE",
    authDomain: "spotter-8a6d5.firebaseapp.com",
    databaseURL: "https://spotter-8a6d5.firebaseio.com",
    projectId: "spotter-8a6d5",
    storageBucket: "spotter-8a6d5.appspot.com",
    messagingSenderId: "666744978054"
  }

firebase.initializeApp(fircnf);

ReactDOM.render(
    <div>
        <Provider store={SessionStore}>
            <Router history={hashHistory}>
                <Route path='/' components={Main}>
                    <IndexRoute component={SessionContainer} />
                    <Route path='about' components={SessionContainer} />
                    <Route path='session/:workoutId' components={SessionEditContainer} />
                </Route>
            </Router>
        </Provider>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
