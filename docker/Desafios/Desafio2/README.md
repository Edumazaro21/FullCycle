# Full Cycle Docker-desafio-2

Aplicação node que utiliza o nginx como um proxy reverso fazendo uma request que deverá inserir um nome em uma tabela do banco mysql.

Para subir toda a aplicação executar o comando abaixo.
```
docker-compose up -d --build
```

Fiz um passo a mais bem simples, se chamar o host "http://localhost:8080" vai adiconar o nome "Eduardo" ao banco, mas caso queira adicionar um nome diferente pode passá-lo como um query param "http://localhost:8080/?name=OutroNome"
