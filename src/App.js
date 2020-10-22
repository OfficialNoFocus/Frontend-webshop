import React from 'react';
import './App.css';

import {Provider} from 'react-redux';

import { Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import {store as ReduxStore} from './redux/Store';
import Routes from './Routes.js';


const browserHistory = createBrowserHistory();
function App() {
 
  return (
    <Provider store={ReduxStore} >
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
