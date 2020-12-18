export const SET_PLAYLISTS_DATA = 'modules/spootify-app/SET_PLAYLISTS_DATA';
export const CLEAR_PLAYLISTS_DATA = 'modules/spootify-app/CLEAR_PLAYLISTS_DATA';

export const setPlaylistsData = data => ({
    type: SET_PLAYLISTS_DATA,
    data,
});

export const clearPlaylistsData = () => ({
    type: CLEAR_PLAYLISTS_DATA,
});

export const playlistsDataReducer = (state = [], action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_PLAYLISTS_DATA:
            return action.data;
        case CLEAR_PLAYLISTS_DATA:
            return [];
        default:
            return state;               
    }
};