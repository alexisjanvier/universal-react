import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

const navBar = {
    display: 'block',
    position: 'absolute',
    right: '1rem',
};

const navLink = {
    margin: '1rem',
    paddingRight: '2rem',
    textDecoration: 'none',
    color: 'white',
    fontSize: '2rem',
};

const MainMenu = () => (
    <AppBar position="static" color="primary">
        <Toolbar>
            <Typography type="title" color="inherit">
                Share easly your playlists from Spotify
            </Typography>
            <nav style={navBar}>
                <Link style={navLink} to="/">Home</Link>
                <Link style={navLink} to="/playlists">Your playlists</Link>
                <Link style={navLink} to="/search-album">Search an album</Link>
            </nav>
        </Toolbar>
    </AppBar>
);

export default MainMenu;
