const db = require('../data/db-config.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(users) {
  await db('users').insert(users);
}

// function insert(hobbit) {
//   return db('users').insert(hobbit);
// }

async function update(id, changes) {
  return null;
}

function remove(id) {
  return db('users')
  .where({id})
  .del()
}

function getAll() {
  return db('users');
}

function findById(id) {
  return null;
}
