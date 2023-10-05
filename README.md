# NLW #6 - Valoriza

Projeto de uma API Rest desenvolvida durante a sexta edição do Next Level Week da [Rocketseat](https://github.com/rocketseat-education), o NLW Together, na trilha de NodeJS ministrada pela professora [Dani Leão](https://github.com/danileao).  

## Projeto

API Rest de um sistema para promover o reconhecimento entre companheiros de equipe através do envio de elogios entre os usuários.

## Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)
- [TypeORM](https://typeorm.io/)
- [SQLite](https://www.sqlite.org/index.html)

## Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Rode `yarn typeorm migration:run` para criar o banco de dados e as tabelas.
- Rode `yarn dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3000`. 

## Endpoints

### Criar usuário

`POST - /users`

![Teste no Insomnia da rota de Criar Usuário](.github/teste_endpoint_criar_user.jpg)

### Realizar Login

`POST - /login `

![Teste no Insomnia da rota de Realizar login](.github/teste_endpoint_realizar_login.jpg)

### Criar Tag

`POST - /tags` 

![Teste no Insomnia da rota de Criar Tag](.github/teste_endpoint_criar_tag.jpg)

### Criar Elogio

`POST - /compliments`

![Teste no Insomnia da rota de Criar Elogio](.github/teste_endpoint_criar_elogio.jpg)

### Listar Elogios Recebidos do Usuario logado

`GET - /users/compliments/receive`

![Teste no Insomnia da rota de Listar Elogios enviados](.github/teste_endpoint_listar_elogios_recebidos.jpg)

### Listar Elogios Enviados do Usuário logado
`GET - /users/compliments/send`

![Teste no Insomnia da rota de Listar Elogios enviados](.github/teste_endpoint_listar_elogios_enviados.jpg)