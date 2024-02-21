// api.test.js
import { fetchAPI, submitAPI } from './Api';

describe('API Functions', () => {
    describe('fetchAPI', () => {
        test('returns an array of available times', () => {
            const date = new Date('2023-12-06'); // Assuming a specific date for testing
            const result = fetchAPI(date);
            expect(Array.isArray(result)).toBe(true);
        });
    });

    describe('submitAPI', () => {
        test('returns true when data is successfully submitted', () => {
            const formData = {
                // Assuming you provide some form data for testing
            };
            const result = submitAPI(formData);
            expect(result).toBe(true);
        });
    });
});
