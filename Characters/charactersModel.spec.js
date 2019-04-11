const db = require('../data/dbConfig.js');

const Characters = require('./charactersModel.js');

describe('characters model', () => {
  beforeEach(async () => {
    await db('chars').truncate();
  });
  describe('insert()', () => {
    it('should insert the provided character', async () => {
      await Characters.insert({ name: 'Dot Matrix' });
      const characters = await db('chars');
      expect(characters).toHaveLength(1);
    });

    it('should insert the provided character and check name', async () => {
      let char = await Characters.insert({ name: 'President Skroob' });
      expect(char.name).toBe('President Skroob');
    });
  });
  describe('delete()', () => {
    beforeEach(async () => {
      await Characters.insert({ name: 'Dot Matrix' });
    });
    it('should delete the privided character', async () => {
      const numChars = await Characters.remove(1);
      expect(numChars).toBe(1);
    });
  });
});
