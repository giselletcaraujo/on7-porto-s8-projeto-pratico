const musicas = require('../model/musicas.json');
const artistas = require('../model/artistas.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(musicas);
}

const getByID = (req, res) => {
    const id = req.params.id

       const musicaFiltrada = musicas.find((musicas) => {
        return musicas.id == id
    })

    res.status(200).send(musicaFiltrada)
}

const getAllArtists = (req, res) => {
    res.status(200).send(artistas)
}

module.exports = { getAll, getByID, getAllArtists}
