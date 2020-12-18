export const SET_CATEGORIES_DATA = 'modules/spootify-app/SET_CATEGORIES_DATA';
export const CLEAR_CATEGORIES_DATA = 'modules/spootify-app/CLEAR_CATEGORIES_DATA';

export const setCategoriesData = data => ({
    type: SET_CATEGORIES_DATA,
    data,
});

export const clearCategoriesData = () => ({
    type: CLEAR_CATEGORIES_DATA,
});

export const categoriesDataReducer = (state = [], action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_CATEGORIES_DATA:
            return action.data;
        case CLEAR_CATEGORIES_DATA:
            return [];
        default:
            return state;               
    }
};