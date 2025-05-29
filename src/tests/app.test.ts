import request from 'supertest';
import app from '../app';

// Test the Endpoint 
describe('API Integration Tests', () => {
    it('GET /api/status should return API is working and API status code', async () => {
        const response = await request(app).get('/api/status');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            status: "API is working"
        });
    });
});


// Check Hello function

describe('GET /api/hello', () => {
    it('should return 200 and "Hello from api" message', async () => {
        const response = await request(app).get('/api/hello');
        // Basic response validation
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            status: 'Hello from api'
        })
    })
})