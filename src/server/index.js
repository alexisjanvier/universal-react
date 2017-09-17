/* eslint-disable no-console */
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { getLoadableState } from 'loadable-components/server';
import { Provider } from 'react-redux';

import App from '../shared/app';
import configureStore from './store';
import render from './render';
import sagas from '../shared/home/sagas';

const createStyleManager = () => MuiThemeProvider.createDefaultContext({
    theme: createMuiTheme({
        palette: createPalette({
            type: 'light',
        }),
    }),
});


const app = express();
app.use('/assets', express.static('./dist'));

app.get('*', async (req, res) => {
    const store = configureStore();
    const context = {};
    const { styleManager, theme } = createStyleManager();

    const appWithRouter = (
        <MuiThemeProvider styleManager={styleManager} theme={theme}>
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </Provider>
        </MuiThemeProvider>
    );

    if (context.url) {
        res.redirect(context.url);
        return;
    }
    let loadableState = {};

    store.runSaga(sagas).done.then(() => {
        const html = ReactDOMServer.renderToString(appWithRouter);
        const preloadedState = store.getState();
        const css = styleManager.sheetsToString();

        return res.status(200).send(render(html, css, loadableState, preloadedState));
    });

    // Trigger sagas for component to run
    // https://github.com/yelouafi/redux-saga/issues/255#issuecomment-210275959
    loadableState = await getLoadableState(appWithRouter);

    // Dispatch a close event so sagas stop listening after they're resolved
    store.close();
});

app.listen(3000, () => console.log('Demo app listening on port 3000'));
