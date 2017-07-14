import { render } from 'react-dom';
import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { HashRouter as Router } from 'react-router-dom'

import App from '../shared/app';

render(
    <MuiThemeProvider>
        <Router>
            <App />
        </Router>
    </MuiThemeProvider>,
    document.getElementById('root'),
);
