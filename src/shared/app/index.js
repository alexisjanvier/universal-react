import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../home/HomePage';
import SearchAlbumPage from '../albums/SearchPage';
import AlbumPage from '../albums/AlbumPage';
import PlayListsPage from '../playlists/ListPage';
import PlaylistPage from '../playlists/PlaylistPage';
import MainMenu from './mainMenu';

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
        <MainMenu />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/playlists/:playlistId(pl-[a-z]{0,4})" component={PlaylistPage} />
            <Route path="/playlists" component={PlayListsPage} />
            <Route path="/search-album" component={SearchAlbumPage} />
            <Route path="/albums/:albumSlug" component={AlbumPage} />
        </Switch>
    </div>
);
export default withStyles(styleSheet)(App);
