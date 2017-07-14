import { render } from 'react-dom';
import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

import App from '../shared/app';

render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root'),
);
