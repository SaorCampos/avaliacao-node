let fs = require('fs');
let usuarios = JSON.parse(fs.readFileSync('controllers/usuario/usuarios.json'));

function pegarUsuarioLogado(token){
    let usuario =usuarios.filter(us => us.token === token);
    return usuario[0] || false;
}
function listar(){
    resultado = usuarios.map(us =>{
        return{
            id: us.id,
            nome: us.nome,
            email: us.email,
            idade: us.idade,
            cidade: us.cidade,
        }
    })
    return resultado;
}
function buscar(idUrl){
    let usuario = usuarios.filter(us => us.id == idUrl).map(us =>{
        return{
            id: us.id,
            nome: us.nome,
            email: us.email,
            idade: us.idade,
            cidade: us.cidade,
        }
    });
    return usuario[0];
}
function criar(usuario){
    let usuarios = listar();
    console.log(typeof usuarios);
    usuarios.push(usuario);
    fs.writeFileSync('controllers/usuario/usuarios.json', JSON.stringify(usuarios));
    return listar();
}
function atualizar(){
    return 'Atulizar usuario'
}
function deletar(usuario_id){
    let filtrados = usuarios.filter((usu)=> usu.id != usuario_id);
    return JSON.stringify(filtrados);
}
function auth(email, senha) {
    let usuario = usuarios.filter(us => us.email === email);
    if (usuario.length === 0) {
        return "Usuario nao encontrado";
    }
    if (usuario[0].senha !== senha) {
        return "Senha incorreta";
    }
    let token = "TK$@#" + usuario[0].senha + "rau_rau_rau";
    token = token.split("").reverse().join("");

    usuarios = usuarios.map(us => {
        if (us.id == usuario[0].id) {
            us.token = token;
        }
        return us;
    })
    fs.writeFileSync('controllers/usuario/usuarios.json', JSON.stringify(usuarios));
    return token; 
}
module.exports ={
    listar,
    buscar,
    criar,
    atualizar,
    deletar,
    auth,
    pegarUsuarioLogado,
}