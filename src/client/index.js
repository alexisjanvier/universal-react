import { render } from 'react-dom';
import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadComponents } from 'loadable-components';
import { Provider } from 'react-redux';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import App from '../shared/app';
import gistReducers from '../shared/home/reducer';
import playlistReducer from '../shared/playlists/reducer';
import sagas from '../shared/home/sagas';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

const reducer = combineReducers({
    gists: gistReducers,
    playlists: playlistReducer,
    routing: routerReducer,
});

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = createStore(
    reducer,
    preloadedState,
    compose(
        applyMiddleware(routerMiddleware(history), sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
);

// then run the saga
sagaMiddleware.run(sagas);

const createStyleManager = () => MuiThemeProvider.createDefaultContext({
    theme: createMuiTheme({
        palette: createPalette({
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

loadComponents().then(() => {
    render(
        <MuiThemeProvider styleManager={styleManager} theme={theme}>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Main />
                </ConnectedRouter >
            </Provider>
        </MuiThemeProvider>,
        document.getElementById('root'),
    );
});
