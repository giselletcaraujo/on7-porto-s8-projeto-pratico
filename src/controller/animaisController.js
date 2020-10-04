const animais = require('../model/animais.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(animais);
}

module.exports = { getAll }