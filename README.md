# :trophy:  Desafio ZBRA :trophy: 

Desenvolvimento de um APP simples que gera um template de torneio mata-mata. :computer:

## Acesso

Aplicação está disponível neste link :arrow_right: [Torneio ZBRA](https://zbra-tournament.herokuapp.com/).

No primeiro acesso a aplicação pode demorar para carregar, pois o Heroku coloca a aplicacão em sleep mode. :sleeping:

## Requisitos

-  :heavy_check_mark: Deve ser possível adicionar, editar e remover participantes do torneio.
-  :heavy_check_mark: A lista de participantes deve ser guardada no localStorage ou IndexedDB.
-  :heavy_check_mark: O campo Nome completo é obrigatório.
- :heavy_check_mark: O campo Celular é obrigatório e deve conter a seguinte máscara: (XX) XXXXX-XXXX.
- :heavy_check_mark: O campo Email é obrigatório e deve estar no seguinte formato: nome@dominio.com.
- :x: O número de participantes de um torneio deve ser uma potência de 2.
- :x: O projeto deve conter testes unitários.
- :heavy_check_mark: O projeto deve usar TypeScript ou ECMA 6+.
- :heavy_check_mark: Não usar bibliotecas existentes para construir as chaves.

## Sobre

### Aplicação
- Para a construção da aplicação foi utilizado Angular 9.
- Estilização e responsividade com bootstrap v4. :art:
- O modal de adição e edição de participantes foi utilizado ngx-bootstrap.
- Para máscara de telefone ngx-mask. :phone:
- Utilizado rotas para navegar entre as páginas.

### Deploy :hammer:
- Foi realizado o deploy da aplicação no Heroku.
- Criado um servidor node com express.

## Rodar localmente

   ### Npm  :pushpin:
   v6.14.10
   ### Node  :pushpin:
   v14.15.4
   ### Angular  :pushpin:
   v9.1.13
   
   ### Instruções
   :one: Possuir as instalaçoes acima nas versões indicada ou superior. <br>
   :two: Clonar repositório. <br>
   :three: Navegar até a pasta onde se encontra o projeto. :open_file_folder: <br>
   :four: Executar o comando "ng serve". <br>
   :five: Abrir o localhost na posta 4200 no navegador. http://localhost:4200/ <br>
      
