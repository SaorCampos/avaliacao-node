let fs = require('fs');
let usuarios = JSON.parse(fs.readFileSync('controllers/usuario/usuarios.json'));

function pegarUsuarioLogado(token){
    let usuario =usuarios.filter(us => us.token === token);
    return usuario[0] || false; //se retornar flase é porque não tem usuario logado com esse token
}
function listar(){
    resultado = usuarios.map(us =>{
        return{
            id: us.id,
            nome: us.nome,
            email: us.email,
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
//Autenticar e gerar um token POST /login (email e senha)
function auth(email, senha) {
    // SELECT * FROM usuarios WHERE email = 'a@a.com'
    let usuario = usuarios.filter(us => us.email === email);
    //se nao encontrou nenhum usuario, é pq nenhum usuario existe com esse email
    if (usuario.length === 0) {
        return "Usuario nao encontrado";
    }
    //testando se a senha confere
    if (usuario[0].senha !== senha) {
        return "Senha incorreta";
    }
    //se chegou ate aqui, entao o email e a senha conferem. então gerando um token pro usuario
    let token = "TK$@#" + usuario[0].senha + "rau_rau_rau";
    token = token.split("").reverse().join("");
    //salvando o token no db/file (como nao estamos usando banco ficou essa marmota)
    //UPDATE usuarios SET token='ABC123' WHERE id='3'
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