const express = require('express');
const route = express.Router();
const comentarios = require('./comentario');

route.get('/comentario/:produtoId', (req, res) => {
    res.send(comentario.listar(req.params.produtoId));
});

route.get('/comentario', (req, res) => {
    if(!req.query.produtoId) {
        res.status(400);
        res.send("não enviou o produtoId")
    }
    res.send(comentario.listarAutor(req.query.produtoId,req.query.autor));
});

module.exports = route;