const { acharExtremos } = require('../../lib/extremos/utilitario');

describe('acharExtremos', () => {

    test('returns empty for null', () => {
        expect(acharExtremos(null)).toEqual({});
    });
    
    test('returns empty for undefined', () => {
        expect(acharExtremos()).toEqual({});
    });
    
    test('returns empty for empty array', () => {
        expect(acharExtremos([])).toEqual({});
    });
    
    test('returns extremos for ordered array with 3 elements', () => {
        expect(acharExtremos([1, 2, 3]))
            .toEqual({ maior: 3, indiceMaior: 2, menor: 1, indiceMenor: 0 });
    });
    
    test('returns extremos for desc ordered array with 3 elements', () => {
        expect(acharExtremos([3, 2, 1]))
            .toEqual({ maior: 3, indiceMaior: 0, menor: 1, indiceMenor: 2 });
    });
    
    test('returns extremos for unordered array with 5 elements', () => {
        expect(acharExtremos([0, -2, -2, 5, 5]))
            .toEqual({ maior: 5, indiceMaior: 3, menor: -2, indiceMenor: 1 });
    });
});