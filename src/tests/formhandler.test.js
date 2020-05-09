import { handleSubmit } from '../client/js/formHandler'


describe('check  "handleSubmit()" should exist' , () => {
    test('It should be defined',  () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe('check  "handleSubmit()" should be a function' , () => {
    test('It should be a function',  () => {
        expect(typeof handleSubmit).toBe("function");
    });
});