import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dashboard from './components/Dashboard/Dashboard';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faBell, faComment, faHandPointUp, faHandPointDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

library.add(faEnvelope, faBell, fab, faComment, faHandPointUp, faHandPointDown, faUser);


ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>,

document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
