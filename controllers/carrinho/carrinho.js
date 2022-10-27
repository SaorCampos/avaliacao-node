const {pegarUsuarioLogado} = require("../usuario/usuario");

let carrinho =
[{"id":1,"produto":1,"usuario":1,"quantidade":5},
{"id":2,"produto":3,"usuario":2,"quantidade":4},
{"id":3,"produto":2,"usuario":1,"quantidade":5},
{"id":4,"produto":5,"usuario":4,"quantidade":5},
{"id":5,"produto":"ypioca","quantidade":3,"usuario":1},
{"id":6,"usuario":1},{"id":7,"usuario":1}]


function buscarCarrinhoDoUsario(token) {
    if (!token) {
        return false;
    }
    let usuario = pegarUsuarioLogado(token);
    let resultado = carrinho.filter(cadaItem => cadaItem.usuario === usuario.id);
    return resultado; 
}

function addAoCart(token, dados) {
    if (!token) {
        return false;
    }
    let usuario = pegarUsuarioLogado(token);
    let identifacadores = carrinho.map(item => item.id);
    let novoId = Math.max(...identifacadores) + 1;
    let novoItem = {
        id: novoId,
        produto: dados.produto,
        quantidade: dados.quantidade,
        usuario : usuario.id
    }
    // adicionando o novoItem aao carrinho
    carrinho.push(novoItem);
    let resultado = carrinho.filter(cadaItem => cadaItem.usuario === usuario.id);
    return resultado;
}
function excluirItemDoCarrinho(token, id) {
    if (!token) {
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