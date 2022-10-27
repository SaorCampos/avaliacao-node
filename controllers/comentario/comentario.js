const fs = require('fs');

function listar(produtoIdParam) {
    return JSON.parse(fs.readFileSync(__dirname + '/comentarios.json').toString()).filter(({ produtoId }) => produtoId === produtoIdParam);
}

function listarAutor(produtoIdParam, autorParam = '') {
    return listar(produtoIdParam).filter(({ nomeDoAutor }) => nomeDoAutor.toLowerCase().indexOf(autorParam.toLowerCase()) >= 0)
}
module.exports = {
    listar,
    listarAutor,
}