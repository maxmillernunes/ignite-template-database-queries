# 💻 Sobre o desafio

Nesse desafio, foi realizado consultas no banco de dados com o TypeORM de três maneiras:

- Usando o ORM
- Usando Query Builder
- Usando Raw Query

Isso irá te ajudar a entender e exercitar os diferentes tipos de consultas que podemos fazer.

No template, você irá encontrar uma aplicação já estruturada (apenas as entidades e repositórios) onde você deverá completar o que falta nas consultas dos dois repositórios.

A aplicação possui dois módulos: `users` e `games`. Um **usuário** pode ter vários jogos e um mesmo **jogo** pode estar associado a vários usuários.

## Como executar os testes

```bash
# instalar dependências
yarn

# executar testes
yarn test
```

## Preparando o ambiente para os testes

Para que os testes funcionem, é importante que você crie uma **database no banco Postgres** com o nome `queries_challenge` e substitua os dados de autenticação (caso os seus não sejam os mesmos) no arquivo **ormconfig.json**:

![https://cdn.discordapp.com/attachments/719251629773422612/874276443515945011/unknown.png](https://cdn.discordapp.com/attachments/719251629773422612/874276443515945011/unknown.png)

Se você não possui um container do Docker rodando o Postgres, é possível criá-lo com seguinte comando:

```bash
docker run --name ignite-challenge-database-queries -e POSTGRES_DB=queries_challenge -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Com isso, o container com o banco Postgres será instalado e ficará rodando pronto para você começar implementar o desafio.

Quando o desafio estiver finalizado, você pode parar o container com o comando `docker stop ignite-challenge-database-queries` para que não fique consumindo recursos desnecessários da sua máquina. E caso você tenha parado o container ou reiniciou sua máquina mas ainda precisa do container rodando, é possível iniciá-lo novamente com o comando `docker start ignite-challenge-database-queries`.

## Especificação dos testes

Para esse desafio, temos os seguintes testes:

- **[UsersRepository] should be able to find user with games list by user's ID**
  Para que esse teste passe, você deve satisfazer o código de acordo com o que é.

- **[UsersRepository] should be able to list users ordered by first name**
  Para que esse teste passe, você deve satisfazer o código de acordo com o que é.

- **[UsersRepository] should be able to find user by full name**
  Para que esse teste passe, você deve satisfazer o código de acordo com o que é.

- **[GamesRepository] should be able find a game by entire or partial given title**
  Para que esse teste passe, você deve satisfazer o código de acordo com o que é.

- **[GamesRepository] should be able to get the total count of games**
  Para que esse teste passe, você deve satisfazer o código de acordo com o que é.
- **[GamesRepository] should be able to list users who have given game id**
  Para que esse teste passe, você deve satisfazer o código de acordo com o que é.
