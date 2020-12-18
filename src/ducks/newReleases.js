export const SET_RELEASES_DATA = 'modules/spootify-app/SET_RELEASES_DATA';
export const CLEAR_RELEASES_DATA = 'modules/spootify-app/CLEAR_RELEASES_DATA';

export const setReleasesData = data => ({
    type: SET_RELEASES_DATA,
    data,
});

export const clearReleasesData = () => ({
    type: CLEAR_RELEASES_DATA,
});

export const releasesDataReducer = (state = [], action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_RELEASES_DATA:
            return action.data;
        case CLEAR_RELEASES_DATA:
            return [];
        default:
            return state;               
    }
};