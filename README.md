## avaliação no express

# Para poder executar o projeto

acesse `https://nodejs.org/`, baixe e instale no seu computador.

### Para executar o projeto

No terminal, dentro da pasta da aplicação execute: `npm install`.
E depois execute: `npm start`.

O projeto sera executado em: `http://localhost:8000/`.
Caso a mesma esteja livre.

### Aviso

As requesições para o carrinho(`GET, PUT e POST`) é necessario informar token.
O qual é disponibilizado na requesição de login pelo insomnia.
Esse tem que ser informado na aba `Headers` do insomnia.

E para o `GET` dos comentarios é necessario passar o `produtoId` e `autor`(não obrigatorio) na aba `Query`.

## Participantes e responsabilidades

Adrielly: responsavel pelo Get usuarios e documentação;

Elias: responsavel pela Get carrinhos;

Elvis: responsavel pela Post carrinho;

Guilherme: responsavel pelo Put carrinho;

Mario: responsavel pelo Get promoção;

Carlos: responsavel pelo Get produtos;

Natan: responsavel pelo Put carrinho;

Saor: responsavel pelos GET Comentarios do produtos.