import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import SessionStore from './store'
import { Provider } from 'react-redux';

import './index.css';
import Home from './app/Home';
import Main from './app/Main';
import SessionEdit from './session/SessionEdit';
import SessionContainer from './session/SessionContainer';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <Provider store={SessionStore}>
        <Router history={hashHistory}>
            <Route path='/' components={Main}>
                <IndexRoute component={SessionContainer} />
                <Route path='about' components={SessionContainer} />
                <Route path='session/:workout' components={SessionEdit} />
            </Route>
        </Router>
        </Provider>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
