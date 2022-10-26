const {pegarUsuarioLogado} = require("../usuario/usuario");
const fs = require('fs');
let carrinho = JSON.parse(fs.readFileSync(__dirname + "/carrinho.json"));

function buscarCarrinhoDoUsario(token){
    if (!token){
        return false;
    }
    let usuario = pegarUsuarioLogado(token);
    let resultado = carrinho.filter(cadaItem => cadaItem.usuario === usuario.id);
    return JSON.stringify(resultado);
}

function addAoCart(token, dados){
    if (!token){
        return false;
    }
    let usuario = pegarUsuarioLogado(token);
    let identifacadores = carrinho.map(item => item.id);
    let novoId = Math.max(...identifacadores) + 1;
    let novoItem = {
        id: novoId,
        produto: dados.produto,
        quantidade: dados.quantidade,
        usuario: usuario.id
    }
    // adicionando o novoItem aao carrinho
    carrinho.push(novoItem);
    fs.writeFileSync(__dirname+'/carrinho.json', JSON.stringify(carrinho));
    return novoItem;
}
function excluirItemDoCarrinho(token, id){
    if (!token){
        return 401;
    }
    let usuario = pegarUsuarioLogado(token);
    // filtrando apenas os items desse usuario logado
    let carrinhoDoUsario = carrinho.filter(cadaItem => cadaItem.usuario === usuario.id);
}

module.exports = {
    buscarCarrinhoDoUsario,
    addAoCart,
    excluirItemDoCarrinho,
}