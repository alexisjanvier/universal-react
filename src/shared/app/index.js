import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../home/HomePage';
import SearchAlbumPage from '../albums/SearchPage';
import AlbumPage from '../albums/AlbumPage';
import PlayListListPage from '../playlists/ListPage';
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
            <Route path="/playlists/:playlistId(PL-[0-9]{0,6})" component={PlaylistPage} />
            <Route path="/playlists" component={PlayListListPage} />
            <Route path="/search-album" component={SearchAlbumPage} />
            <Route path="/albums/:albumSlug" component={AlbumPage} />
        </Switch>
    </div>
);
export default withStyles(styleSheet)(App);
