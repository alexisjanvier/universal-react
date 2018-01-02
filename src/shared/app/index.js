import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import * as Routes from './routes';
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
        <Helmet
            htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
            titleTemplate="%s | Universal React POC "
            titleAttributes={{ itemprop: 'name', lang: 'en' }}
            meta={[
                { name: 'description', content: 'Server side rendering example' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ]}
        />
        <MainMenu />
        <Switch>
            <Route exact path="/" component={Routes.HomePage} />
            <Route path="/playlists/:playlistId(pl-[a-z]{0,4})" component={Routes.PlaylistPage} />
            <Route path="/playlists" component={Routes.PlayListsPage} />
            <Route path="/search-album" component={Routes.SearchAlbumPage} />
            <Route path="/albums/:albumSlug" component={Routes.AlbumPage} />
        </Switch>
    </div>
);
export default withStyles(styleSheet)(App);
