import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/App';

const application = <Router><App/></Router>

const rootDocument = document.getElementById('root');

render(application, rootDocument);