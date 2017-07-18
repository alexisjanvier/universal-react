import { render } from 'react-dom';
import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../shared/app';

const createStyleManager = () => MuiThemeProvider.createDefaultContext({
    theme: createMuiTheme({
        palette: createPalette({
            // primary: green,
            // accent: red,
            type: 'light',
        }),
    }),
});

class Main extends Component {
    // Remove the server-side injected CSS.
    componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        return (
            <Router>
                <App {...this.props} />
            </Router>
        );
    }
}

// Create a styleManager instance.
const { styleManager, theme } = createStyleManager();

render(
    <MuiThemeProvider styleManager={styleManager} theme={theme}>
        <Main />
    </MuiThemeProvider>,
    document.getElementById('root'),
);
