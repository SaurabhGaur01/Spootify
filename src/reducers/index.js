import { combineReducers } from 'redux';
import { releasesDataReducer as releases } from '../ducks/newReleases';
import { categoriesDataReducer as categories } from '../ducks/categories';
import { playlistsDataReducer as playlists } from '../ducks/playlists';

export default combineReducers({
    releases,
    categories,
    playlists,
})