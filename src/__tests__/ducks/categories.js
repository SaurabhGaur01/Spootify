import {
    setCategoriesData,
    clearCategoriesData,
    categoriesDataReducer,
} from '../../ducks/categories';

const mockObject = [
    {
        mockVariable: 'mockValue',
    }
];

describe('categories Duck Tests', () => {
    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setCategoriesData should match the snapshot' , () => {
            expect(setCategoriesData(mockObject)).toMatchSnapshot();
        });
        it('clearCategoriesData should match the snapshot' , () => {
            expect(clearCategoriesData()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(categoriesDataReducer()).toEqual([]);
        });
        it('should return the passed state if called with no action' , () => {
            expect(categoriesDataReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(categoriesDataReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should set the value when called with setCategoriesData' , () => {
            expect(categoriesDataReducer('', setCategoriesData(mockObject))).toEqual(mockObject);
        });
        it('should clear the store when called with clearCategoriesData' , () => {
            expect(categoriesDataReducer(mockObject, clearCategoriesData())).toEqual([]);
        });
    });
});