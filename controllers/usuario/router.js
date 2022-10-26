const express = require('express');
const route = express.Router();
const usuario = require('./usuario')

route.get("/usuario", (req, res) => {
    res.send(usuario.listar());
});
route.get('/usuario/:id', (req, res) =>{
    res.send(usuario.buscar(req.params.id))
});
route.get("/me", (req, res) => {
    res.send(usuario.pegarUsuarioLogado(req.headers.authorization));
});
route.post("/login", (req, res) => {
    let {email, senha} = req.body;
    res.send(usuario.auth(email, senha))
});
route.put("/usuario/:id", (req, res) => {
    res.send(usuario.atualizar());
});
route.delete("/usuario", (req, res) => {
    res.send('Ta faltando o id');
});
route.delete("/usuario/:id", (req, res) => {
    res.send(usuario.deletar(req.params.id));
});

module.exports = route;