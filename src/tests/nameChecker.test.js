import { checkForName } from '../client/js/nameChecker'

describe('Check "checkForName()" should exist' , () => {
    test('It should return true',  () => {
        expect(checkForName).toBeDefined();
    });
});

describe('Check "checkForName()" should be a function' , () => {
    test('It should be a function',  () => {
        expect(typeof checkForName).toBe("function");
    });
});