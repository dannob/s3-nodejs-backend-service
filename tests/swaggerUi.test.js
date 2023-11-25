
const request = require('supertest');
const app = require('../src/index'); // Import the app

describe('Swagger UI Tests', () => {
  it('should redirect to Swagger UI at /api-docs', async () => {
    const res = await request(app).get('/api-docs');
    expect(res.statusCode).toEqual(301); // Expect a redirect
  });

  it('should serve Swagger UI at /api-docs/', async () => {
    const res = await request(app).get('/api-docs/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Swagger UI'); // Check for Swagger UI content
  });
});
