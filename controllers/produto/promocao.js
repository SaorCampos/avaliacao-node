const fs = require("fs");

function listar() {
  let produtos = JSON.parse(fs.readFileSync(__dirname + "/produtos.json", "utf8"));
  return produtos
    .filter((produto) => produtos.indexOf(produto) >= produtos.length - 2)
    .map((produto) => {
      return { ...produto, valorPromocao: produto.valor / 2 };
    });
}


module.exports = {
  listar,

};
