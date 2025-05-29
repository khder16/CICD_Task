import request from 'supertest';
import app from "../app";

describe('API Integration Tests', () => {
    it('GET /api/status should return API is working and API status code', async () => {
        const response = await request(app).get('/api/status');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            status: "API is working"
        });
    });
});

describe('Hello Message API Integration Tests', () => {
    it('GET /api/hello should return hello message with 200 status', async () => {
        const response = await request(app).get('/api/hello');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            status: 'Hello from api'
        });
    });
})
