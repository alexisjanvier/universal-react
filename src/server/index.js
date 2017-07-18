/* eslint-disable no-console */
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { getLoadableState } from 'loadable-components/server';
// import { green, red } from 'material-ui/styles/colors';

import App from '../shared/app';
import render from './render';

const createStyleManager = () => MuiThemeProvider.createDefaultContext({
    theme: createMuiTheme({
        palette: createPalette({
            // primary: green,
            // accent: red,
            type: 'light',
        }),
    }),
});


const app = express();
app.use('/assets', express.static('./dist'));

app.get('*', async (req, res) => {
    const context = {};
    const { styleManager, theme } = createStyleManager();

    const appWithRouter = (
        <MuiThemeProvider styleManager={styleManager} theme={theme}>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        </MuiThemeProvider>
    );

    if (context.url) {
        res.redirect(context.url);
        return;
    }

    const loadableState = await getLoadableState(appWithRouter);
    const html = ReactDOMServer.renderToString(appWithRouter);
    const css = styleManager.sheetsToString();

    res.status(200).send(render(html, css, loadableState));
});

app.listen(3000, () => console.log('Demo app listening on port 3000'));
