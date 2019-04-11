const request = require('supertest');
const server = require('./server.js');
const db = require('../data/dbConfig.js');

describe('server.js', () => {
  describe('GET /', () => {
    it('should respond with 200 OK', async () => {
      const response = await request(server).get('/');
      expect(response.status).toBe(200);
    });
  });
  describe('POST /', () => {
    afterEach(async () => {
      await db('chars').truncate();
    });
    it('should respond with 201', async () => {
      const char = { name: 'Major Asshole' };
      const response = await request(server)
        .post('/characters')
        .send(char);
      expect(response.status).toBe(201);
    });
    it('should return created character', async () => {
      const char = { name: 'Colonel Sandurz' };
      const response = await request(server)
        .post('/characters')
        .send(char);
      expect(response.body.name).toBe('Colonel Sandurz');
    });
  });
  describe('DELETE /', () => {
    beforeEach(async () => {
      await db('chars').truncate();
      await db('chars').insert({ name: 'Sgt Asshole' });
    });
    it('should respond with 204', async () => {
      const response = await request(server).delete('/characters/1');
      expect(response.status).toBe(204);
    });
    it('should respond with no content', async () => {
      const response = await request(server).delete('/characters/1');
      expect(response.body.message).toBeUndefined();
    });
  });
});
