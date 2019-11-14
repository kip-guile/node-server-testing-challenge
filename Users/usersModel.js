const db = require('../data/db-config.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(hobbit) {
  await db('users').insert(hobbit);
}

// function insert(hobbit) {
//   return db('users').insert(hobbit);
// }

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('users');
}

function findById(id) {
  return null;
}
