const express = require('express');
const route = express.Router();
const carrinho = require('./carrinho');

route.get('/carrinho/:id', (req, res) =>{
    res.send(carrinho.buscarCarrinhoDoUsario(req.headers.authorization));
});

route.post('/carrinho/:id', (req, res) => {
    let token = req.headers.authorization;
    res.send(carrinho.addAoCart(token, req.body));
});

route.put('/carrinho/:id', (req, res) => {
    let token = req.headers.authorization;
    res.send(carrinho.editarItemDoCarrinho(token, req.body));
});

route.delete('/carrinho/:id', (req, res) => {
    let token = req.headers.authorization;
    res.send(carrinho.excluirItemDoCarrinho(token, req.params.id))
})

module.exports = route;