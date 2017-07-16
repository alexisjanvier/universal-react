import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemIcon } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';

import { playlists } from './playlists';

const styleSheet = createStyleSheet('SimpleList', theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        background: theme.palette.background.paper,
    },
}));

const PlaylistPage = ({ classes, match }) => {
    const playlist = playlists.find(pl => pl.id === match.params.playlistId);
    return (
        <div className={classes.root}>
            <h1>{playlist.title}</h1>
            <List>
                {playlist.albums.map(album => (
                    <ListItem key={album.slug} button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <Link to={`/albums/${album.slug}`}>{album.title}</Link>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

PlaylistPage.propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(PlaylistPage);
