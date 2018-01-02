export const renderHeader = helmet => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="icon" type="image/png" href="/assets/favicon.ico" />
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="root">
`;

export const renderFooter = (css, loadableState, preloadedState) => `
            </div>
            <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <style id="jss-server-side">${css}</style>
            <script src="/assets/vendor.js"></script>
            <script src="/assets/client.js"></script>
            ${loadableState.getScriptTag()}
        </body>
    </html>
`;
