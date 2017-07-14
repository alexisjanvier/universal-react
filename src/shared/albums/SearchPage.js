import { Link, withRouter } from 'react-router-dom';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Input from 'material-ui/Input/Input';
import PropTypes from 'prop-types';
import qs from 'query-string';
import React, { Component } from 'react';

import albumsData from './albumsData';

const styleSheet = createStyleSheet('TextInputs', theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing.unit,
    },
}));

const matchedAlbums = (searched, albums) => albums
    .filter(album => searched && album.title.toLowerCase().indexOf(searched.toLowerCase()) !== -1);

class SearchPage extends Component {
    constructor(props) {
        super(props);
        const searchedAlbum = qs.parse(this.props.location.search).query || '';
        this.state = {
            value: searchedAlbum,
            findedAlbums: matchedAlbums(searchedAlbum, this.props.albums),
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const input = event.target.value;
        this.setState({
            value: input,
            findedAlbums: matchedAlbums(input, this.props.albums),
        });
        this.props.history.push({
            pathname: '/search-album',
            search: `?query=${encodeURIComponent(input)}`,
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <h1>Search an album</h1>
                Album title: <Input
                    value={this.state.value}
                    onChange={this.handleChange}
                    className={classes.input}
                />
                {this.state.value && <h2>
                    Searched album: {this.state.value}
                </h2>}
                {this.state.findedAlbums && <ul>
                    {this.state.findedAlbums.map(album => (
                        <li key={album.slug}>
                            <Link to={`/albums/${album.slug}`}>{album.title}</Link>
                        </li>
                    ))}
                </ul>}
            </div>
        );
    }
}

SearchPage.propTypes = {
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    albums: PropTypes.arrayOf(PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })),
};

SearchPage.defaultProps = {
    albums: albumsData,
};

export default withRouter(withStyles(styleSheet)(SearchPage));
