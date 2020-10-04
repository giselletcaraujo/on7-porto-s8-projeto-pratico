const express = require('express');
const app = express();

const musicas = require('./routes/musicasRoutes');
const animais = require('./routes/animaisRoutes');

app.use('/', musicas, animais);

app.get('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})

module.exports = app 