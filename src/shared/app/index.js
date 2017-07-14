import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('ButtonAppBar', {
    root: {
        marginTop: 30,
        width: '100%',
    },
    flex: {
        flex: 1,
    },
});

const App = () => (
    <div>
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography type="title" color="inherit">
                    Share easly your playlists from Spotify
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
);
export default withStyles(styleSheet)(App);
