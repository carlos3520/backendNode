const consultaModel = require('../models/consultaModel');

const consulta = async (req, res) =>{
    const resultado = await consultaModel.getAll();
    if ('erro' in resultado) {
        return res.status(400).json(resultado);
    } else {
        return res.status(200).json(resultado);
    }
}

module.exports = {
    consulta
}