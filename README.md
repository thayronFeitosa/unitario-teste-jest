# API para teste jest

Para que a API funcione e necessário criar um banco de dados chamado "teste". Mas isso pode ser modificado no arquivo de configuração ORM

## Cadastro de usuário
  Para cadastra o usuário e necessário que a tabela do banco de dados typo de usuário tennha dados. Caso não tenha pode ser criado meio de requisição no insominia ou rodando o comando a baixo

  ```sql
    INSERT INTO typeUser (id,nametype)
	  VALUES (1,'Filial'), (2, 'matriz'), (3, 'Usuário Padão');
  ```

  ## Autenticação
  Como temos vários tipos de usuário e o login precisa identificar qual usuário está fazendo a requisiação e assim trazer os dados correspondentes do usuário

  <img alt="Data base" src="./img/banco.png">
