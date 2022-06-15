'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const mockRequest = supertest(server);

describe('Validate query function', () => {
  describe('Name query', () => {
    test('500 if no name in the query string', async () => {
      let response = await mockRequest.get(); // come back to this
      expect(response.status).toEqual(500);
      expect(response.text).toEqual();
    });
  });

  describe('GET routes Tests', () => {
    test('/person route has name in query string', async () => {
      let response = await mockRequest.get('/person/:name');
      expect(response.status).toEqual(200);
      expect(response.headers['Content-Type']).toMatch(/json/);
    });
  });
});
