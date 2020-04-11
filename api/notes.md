# EXPRESS+SEQUELIZE+TYPESCRIPT

### Comandos
**SEQUELIZE**  
`iniciar sequelize`  
sequelize init  
`criar seed`  
sequelize-cli seed:generate --name demo-user  
`criar migration`  
sequelize-cli migration:generate --name migration-skeleton  

**TYPESCRIPT**  
`iniciar typescript`  
tsc --init  

`compilar arquivos typescript`  
ts-node-dev --respawn --transpileOnly xxx.ts  

**JEST**  
`iniciar jest`  
npx ts-jest config:init  


### NOTES
`JOIN`  
**through** => sempre se refere a tabela que tem a relação N<=>N, inclusive lidando com os atributos das tabelas  
**Model: User, as: name (or) associantion: name** => inclui o join   

**User.belongsTo(Project)** => target se refere a project e source a User, a fk e criada em User  
**Project.hasMany(User)** => target se refere a User e source Project, a fk é criada em User  
foreign key/ defini o nome do campo, por padrão a chave de referencia sera a primária, caso queira mudar, use source/target  
[https://sequelize.org/v5/manual/associations.html]  

`criar migration`  
sequelize migration:generate --name name_migration  
`executar migration`  
sequelize db:migrate  
`revertar migration - reverter todas`  
sequelize db:migrate:undo **-** sequelize db:migrate:undo:all  

`criar seed`  
sequelize seed:generate --name name_seed  
`executar seed`  
sequelize db:seed:all  
`reverter seed especifica - reverter todas`  
sequelize db:seed:undo --seed name_seed **-** sequelize db:seed:undo:all  
[https://sequelize.org/v5/manual/migrations.html]  

---


yarn sequelize db:seed:undo:all; yarn sequelize db:migrate; yarn sequelize db:seed:all; yarn jest --no-cache