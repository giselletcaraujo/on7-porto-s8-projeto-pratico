const express = require('express');
const route = express.Router();
const controller = require('../controller/musicasController');

route.get('/musicas', controller.getAll);
route.get('/musica/:id', controller.getByID); // ROTA DO FILTRO
route.get('/artistas', controller.getAllArtists); // ROTA DO FILTRO II

module.exports = route 