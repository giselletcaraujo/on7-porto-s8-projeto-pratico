const express = require('express');
const route = express.Router();
const controller = require('../controller/animaisController');

route.get('/animais', controller.getAll);

module.exports = route