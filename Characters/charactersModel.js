const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(char) {
  const [id] = await db('chars').insert(char);
  return db('chars')
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return db('chars')
    .where({ id })
    .del();
}

function getAll() {
  return db('chars');
}

function findById(id) {
  return null;
}
