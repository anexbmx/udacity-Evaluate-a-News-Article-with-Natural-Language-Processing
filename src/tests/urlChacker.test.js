  
import {checkForUrl} from '../client/js/urlChecker'


describe('Check "checkForUrl()" should exist' , () => {
    test('It should be defined',  () => {
        expect(checkForUrl).toBeDefined();
    });
});

describe('Check "checkForUrl()" should be a function' , () => {
    test('It should be a function',  () => {
        expect(typeof checkForUrl).toBe("function");
    });
});

describe('Check "checkForUrl()" for valid url' , () => {
    var url = "https://www.skillsyouneed.com/ips/dealing-with-criticism.html";
    test('It should return true',  () => {
        const response = checkForUrl(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});
