import React, { Component } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import locale from 'date-fns/locale/fr';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';


import { fetchGists as fetchGistsAction } from './actions';
import GistsList from './GistList';

export class HomePage extends Component {
    componentWillMount() {
        this.props.loadGists();
    }

    render() {
        const { gists } = this.props;
        return (
            <div>
                <Helmet
                    title="Welcome"
                />
                <h1>Homepage</h1>
                <p>{format(new Date(), 'dddd DD MMMM YYYY', { locale })}</p>
                {gists.length > 0 && <GistsList gists={gists.slice(0, 10)} />}
            </div>
        );
    }
}

HomePage.propTypes = {
    loadGists: PropTypes.func.isRequired,
    gists: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
};

HomePage.defaultProps = {
    gists: [],
};

const mapStateToProps = ({ gists }) => ({
    gists,
});

export default connect(mapStateToProps, { loadGists: fetchGistsAction })(HomePage);
