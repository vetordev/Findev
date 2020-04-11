# FINDEV

## O que é?
Plataforma digital construída com o propósito de facilitar as relações de negócio entre os desenvolvedores e agências.

## Como foi construído?
A plataforma conta com dois sistemas que conversam entre sí, o `WEB` e `MOBILE` (ambos descrito abaixo) e consomem de uma `API` em comum.  
`WEB` - Escrito em Javascript e com React JS ...  
`MOBILE` - Escrito com Javascript com React Native ...  
`API` - Escrito em Typescript juntamente ao Node.js com as libs:
- Express para requisições HTTP
- Sequelize para manipulação do banco de dados
- Socket.io para uso do websocket
- Jest para testes da aplicação
- Celebrate e Joi para validações
- Banco de dados em SQLite 3
- Sucrase para transpilação do Typescript para o Javascript

## Sistemas
- **(WEB)**: Focado nas agências, permitindo a elas divulgar seus projetos e procurar/contratar novos desenvolvedores.  
- **(MOBILE)**: Focado em desenvolvedores, permitindo que eles visualizem os projetos das agências e demonstre interesse em participar.  
