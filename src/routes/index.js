import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Discover from './Discover';
import makeRequest from './Discover/api/makeRequest';
import { setCategoriesData } from '../ducks/categories';
import { setPlaylistsData } from '../ducks/playlists';
import { setReleasesData } from '../ducks/newReleases';

class Routes extends React.Component{
  componentDidMount(){
    const { actionSetCategoriesData, actionSetReleasesData, actionSetPlaylistsData } = this.props;
    Promise.all([
      makeRequest('new-releases'),
      makeRequest('featured-playlists'),
      makeRequest('categories')
    ]).then(result => {
      const [ newReleaseData, featuredPlaylistData, categoriesData ] = result;
      const { data: { albums: { items: newReleases = [] } = {} } = {}} = newReleaseData;
      const { data: { playlists: { items: playlists = [] } = {} } = {}} = featuredPlaylistData;
      const { data: { categories: { items: categories = [] } = {} } = {}} = categoriesData;
      actionSetReleasesData(newReleases);
      actionSetPlaylistsData(playlists);
      actionSetCategoriesData(categories);
    })
  }

  render(){
    return <Discover />;
  }
}

Routes.propTypes = {
  actionSetCategoriesData: PropTypes.func.isRequired,
  actionSetReleasesData: PropTypes.func.isRequired,
  actionSetPlaylistsData: PropTypes.func.isRequired
};

const mapDispatchAsProps = dispatch => {
  return {
      actionSetCategoriesData: data => dispatch(setCategoriesData(data)),
      actionSetReleasesData: data => dispatch(setReleasesData(data)),
      actionSetPlaylistsData: data => dispatch(setPlaylistsData(data)),
  };
}

const hocChain = compose(
  connect(null, mapDispatchAsProps),
);

export { Routes as TestableRoutes };

export default hocChain(Routes);