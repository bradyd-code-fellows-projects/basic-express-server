'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Server Tests', () => {
  describe('Error Handler Tests', () => {
    test('404 on a bad route', async() => {
      let response = await mockRequest.get('/blah'); // come back to this
      expect(response.status).toEqual(404);
      expect(response.text).toEqual('Not found');
    });
    test('404 on a bad method', async() => {
      let response = await mockRequest.put('/person');
      expect(response.status).toEqual(404);
      expect(response.text).toEqual('Not found');
    });
  });
});
