let fs = require('fs');
// let comentarios = JSON.parse(fs.readFileSync(__dirname + "/comentarios.json"));

function listar(produtoIdParam) {
    return JSON.parse(fs.readFileSync(__dirname+'/comentario.json').toString()).filter(({produtoId})=> produtoId === produtoIdParam);
}

function listarAutor(produtoIdParam,autorParam = "") {
    return listar(produtoIdParam).filter(({nomeDoAutor})=> nomeDoAutor.toLowerCase().indexOF(autorParam.toLowerCase()) >=0);
}

module.exports = {
    listar,
    listarAutor,
}