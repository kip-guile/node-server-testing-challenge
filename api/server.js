const express = require('express');

const Hobbits = require('../Users/usersModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/users', (req, res) => {
  Hobbits.getAll()
    .then(hobbits => {
      res.status(200).json(rows);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;