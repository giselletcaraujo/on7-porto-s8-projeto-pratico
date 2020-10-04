const musicas = require('../model/musicas.json');
const artistas = require('../model/artistas.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(musicas);
}

// CONTEUDO DA TARDE - FILTROS

const getByID = (req, res) => {
    const id = req.params.id

    // const musicaFiltrada = musicas.find((musica) => musica.id == id)
    const musicaFiltrada = musicas.find((musicas) => {
        return musicas.id == id
    })

    res.status(200).send(musicaFiltrada)
}

 // FILTRO POR ARTISTA
 const getAllArtists = (req, res) => {
    res.status(200).send(artistas)
}

module.exports = { getAll, getByID, getAllArtists}
