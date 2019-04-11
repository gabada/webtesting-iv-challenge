const express = require('express');

const server = express();
const Characters = require('../Characters/charactersModel.js');

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ side: 'light side' });
});

server.post('/characters', async (req, res) => {
  try {
    const char = await Characters.insert(req.body);
    res.status(201).json(char);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.delete('/characters/:id', async (req, res) => {
  try {
    const count = await Characters.remove(req.params.id);
    if (count > 0) {
      res.status(204).json({ message: 'I hated that character too' });
    } else {
      res.status(404).json({ message: 'Maybe thats a Star Wars Character?' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = server;
