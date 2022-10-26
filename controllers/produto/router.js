const express = require('express');
const route = express.Router();
const produto = require('./produto');

route.get("/produto", (req, res) => {
    res.send(produto.listar());
});

route.post("/produto", (req, res) => {
    res.send(produto.criar(req.body));
});
route.put("/produto/:id", (req, res) => {
    res.send(produto.atualizar());
});
route.delete("/produto", (req, res) => {
    res.send('Ta faltando o id');
});
route.delete("/produto/:id", (req, res) => {
    res.send(produto.deletar(req.params.id));
});
module.exports = route;