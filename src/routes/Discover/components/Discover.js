import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

const Discover = ({ releases, categories, playlists }) => (
  <div className="discover">
    <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={releases} />
    <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
    <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
  </div>
);

Discover.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({})),
  categories: PropTypes.arrayOf(PropTypes.shape({})),
  playlists: PropTypes.arrayOf(PropTypes.shape({})),
};

Discover.defaultProps = {
  releases: [],
  categories: [],
  playlists: [],
}

export const mapStateToProps = state => ({
  releases: state.releases,
  categories: state.categories,
  playlists: state.playlists,
});

const hocChain = compose(
  connect(mapStateToProps),
);

export default hocChain(Discover);
