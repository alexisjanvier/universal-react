export default (html, css, loadableState) => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Get real playlists to share with Spotify</title>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="icon" type="image/png" href="/assets/favicon.ico" />
        </head>
        <body>
            <div id="root">${html}</div>
            <style id="jss-server-side">${css}</style>
            <script src="/assets/vendor.js"></script>
            <script src="/assets/client.js"></script>
            ${loadableState.getScriptTag()}
        </body>
    </html>
`;
