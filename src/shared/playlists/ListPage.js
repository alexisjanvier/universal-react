import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemIcon } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';

import { genres, playlists } from './playlists';

const styleSheet = createStyleSheet('SimpleList', theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        background: theme.palette.background.paper,
    },
}));

const Page = ({ classes, match }) => {
    const genre = match.params.genre;
    const filteredPlalists = genre ? playlists.filter(pl => pl.genre === genre) : playlists;
    return (
        <div className={classes.root}>
            <h1>Your playlists</h1>
            <List>
                {filteredPlalists.map(pl => (
                    <ListItem key={pl.id} button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <Link to={`/playlists/${pl.id}`}>{pl.title}</Link>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

Page.propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

const StyledList = withStyles(styleSheet)(Page);

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
        <Route path="/playlists/:genre?" component={StyledList} />
    </div>
);

export default ListPage;
