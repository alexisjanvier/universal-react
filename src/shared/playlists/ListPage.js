import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemIcon } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import Helmet from 'react-helmet';

import { genres } from './playlists';
import { loadPlaylist as loadPlaylistAction } from './actions';

const styleSheet = createStyleSheet('SimpleList', theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        background: theme.palette.background.paper,
    },
}));

export class Page extends Component {
    componentWillMount() {
        this.props.loadPlaylist();
    }

    render() {
        const { classes, match, playlists } = this.props;
        const genre = match.params.genre;
        const filteredPlalists = genre ? playlists.filter(pl => pl.genre === genre) : playlists;
        return (
            <div className={classes.root}>
                <Helmet
                    title="Playlists"
                />
                <h1>Your playlists</h1>
                {playlists.length && <List>
                    {filteredPlalists.map(pl => (
                        <ListItem key={pl.id} button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <Link to={`/playlists/${pl.id}`}>{pl.title}</Link>
                        </ListItem>
                    ))}
                </List>}
            </div>
        );
    }
}

Page.propTypes = {
    classes: PropTypes.object.isRequired,
    loadPlaylist: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    playlists: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
    })),
};

Page.defaultProps = {
    playlists: [],
};

const mapStateToProps = state => ({
    playlists: state.playlists,
});

const StyledPage = withStyles(styleSheet)(Page);
const ConnectedPage = connect(mapStateToProps, { loadPlaylist: loadPlaylistAction })(StyledPage);

const subNavLink = {
    paddingRight: '2rem',
    textDecoration: 'none',
    color: 'black',
    fontSize: '1.5rem',
};

const ListPage = () => (
    <div>
        <nav>
            {genres.map(g => (
                <Link style={subNavLink} key={g} to={`/playlists/${g}`}>{g}</Link>
            ))}
        </nav>
        <Route path="/playlists/:genre?" component={ConnectedPage} />
    </div>
);

export default ListPage;
