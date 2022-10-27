const {pegarUsuarioLogado} = require("../usuario/usuario");
const fs = require('fs');
let carrinho = JSON.parse(fs.readFileSync(__dirname + "/carrinho.json"));

let carrrinho = [
    {"id":1,"produto":1,"usuario":1,"quantidade":5},
    {"id":2,"produto":2,"usuario":2,"quantidade":5},
    {"id":3,"produto":2,"usuario":3,"quantidade":5},
    {"id":4,"produto":2,"usuario":4,"quantidade":5},
    {"id":5,"produto":"ypioca","quantidade":3,"usuario":5},
    {"id":6,"produto":"Refrigerante","quantidade":"3","usuario":6},
    {"id":7,"usuario":7},
    {"id":8,"produto":"Refrigerante","quantidade":"3","usuario":8},
    {"id":9,"produto":"Refrigerante","quantidade":"3","usuario":9},
    {"id":10,"produto":"Refrigerante","quantidade":"3","usuario":1}

]

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

function editarItemDoCarrinho(){
    let {id} = req.params
    let usuario = pegarUsuarioLogado(token);
    let resultado = carrinho.filter(cadaItem => cadaItem.usuario == id);

    return resultado
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
    editarItemDoCarrinho,
}