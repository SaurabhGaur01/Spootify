import {
    setReleasesData,
    clearReleasesData,
    releasesDataReducer,
} from '../../ducks/newReleases';

const mockObject = [
    {
        mockVariable: 'mockValue',
    }
];

describe('newReleases Duck Tests', () => {
    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setReleasesData should match the snapshot' , () => {
            expect(setReleasesData(mockObject)).toMatchSnapshot();
        });
        it('clearReleasesData should match the snapshot' , () => {
            expect(clearReleasesData()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(releasesDataReducer()).toEqual([]);
        });
        it('should return the passed state if called with no action' , () => {
            expect(releasesDataReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(releasesDataReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should set the value when called with setReleasesData' , () => {
            expect(releasesDataReducer('', setReleasesData(mockObject))).toEqual(mockObject);
        });
        it('should clear the store when called with clearReleasesData' , () => {
            expect(releasesDataReducer(mockObject, clearReleasesData())).toEqual([]);
        });
    });
});