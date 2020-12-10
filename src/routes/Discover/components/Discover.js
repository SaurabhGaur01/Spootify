import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import makeRequest from '../api/makeRequest';
import '../styles/_discover.scss';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  componentDidMount(){
    Promise.all([
      makeRequest('new-releases'),
      makeRequest('featured-playlists'),
      makeRequest('categories')
    ]).then(result => {
      const [ newReleaseData, featuredPlaylistData, categoriesData ] = result;
      const { data: { albums: { items: newReleases }}} = newReleaseData;
      const { data: { playlists: { items: playlists }}} = featuredPlaylistData;
      const { data: { categories: { items: categories }}} = categoriesData;
      
      this.setState({ playlists, newReleases, categories })
    })
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
