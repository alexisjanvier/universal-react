import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import albumsData from './albumsData';

const AlbumPage = ({ match }) => {
    const album = albumsData.find(record => record.slug === match.params.albumSlug);
    return (
        <div>
            <Helmet
                title={album.title}
            />
            <h1>Album {album.title}</h1>
        </div>
    );
};

AlbumPage.propTypes = {
    match: PropTypes.object.isRequired,
};

export default withRouter(AlbumPage);
