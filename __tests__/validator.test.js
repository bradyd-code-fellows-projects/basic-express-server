'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const mockRequest = supertest(app);

describe('Validate query function', () => {
  describe('Name query', () => {
    test('500 if no name in the query string', async () => {
      let response = await mockRequest.get('/person'); // come back to this
      expect(response.status).toEqual(500);
      expect(response.text).toEqual('Please enter a valid query parameter, like this: /person?name=John');
    });
  });

  describe('GET routes Tests', () => {
    test('/person route has name in query string', async () => {
      let response = await mockRequest.get('/person?name=John');
      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('John');
    });
  });
});
