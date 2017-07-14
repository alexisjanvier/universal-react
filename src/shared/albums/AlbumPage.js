import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import albumsData from './albumsData';

const AlbumPage = ({ match }) => (
    <h1>Album {albumsData.find(album => album.slug === match.params.albumSlug).title}</h1>
);

AlbumPage.propTypes = {
    match: PropTypes.object.isRequired,
};

export default withRouter(AlbumPage);
