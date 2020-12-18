import {
    setPlaylistsData,
    clearPlaylistsData,
    playlistsDataReducer,
} from '../../ducks/playlists';

const mockObject = [
    {
        mockVariable: 'mockValue',
    }
];

describe('playlists Duck Tests', () => {
    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setPlaylistsData should match the snapshot' , () => {
            expect(setPlaylistsData(mockObject)).toMatchSnapshot();
        });
        it('clearPlaylistsData should match the snapshot' , () => {
            expect(clearPlaylistsData()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(playlistsDataReducer()).toEqual([]);
        });
        it('should return the passed state if called with no action' , () => {
            expect(playlistsDataReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(playlistsDataReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should set the value when called with setPlaylistsData' , () => {
            expect(playlistsDataReducer('', setPlaylistsData(mockObject))).toEqual(mockObject);
        });
        it('should clear the store when called with clearPlaylistsData' , () => {
            expect(playlistsDataReducer(mockObject, clearPlaylistsData())).toEqual([]);
        });
    });
});