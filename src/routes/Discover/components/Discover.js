import React, { useState, useEffect } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import makeRequest from '../api/makeRequest';
import '../styles/_discover.scss';

const Discover = () => {
  // States for holding values
  const [newReleases, setNewReleases] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [categories, setCategories] = useState([]);

  // Making API calls and updating state when component renders on mount
  useEffect(() => {
    Promise.all([
      makeRequest('new-releases11'),
      makeRequest('featured-playlists'),
      makeRequest('categories')
    ]).then(result => {
      const [ newReleaseData, featuredPlaylistData, categoriesData ] = result;
      const { data: { albums: { items: newReleases = [] } = {} } = {}} = newReleaseData;
      const { data: { playlists: { items: playlists = [] } = {} } = {}} = featuredPlaylistData;
      const { data: { categories: { items: categories = [] } = {} } = {}} = categoriesData;
      setNewReleases(newReleases);
      setPlaylists(playlists);
      setCategories(categories);
    })
  }, []);

  return (
    <div className="discover">
      <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
    </div>
  );
}

export default Discover;
