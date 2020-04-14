import { Sequelize, Model, DataTypes } from 'sequelize';

class Developer extends Model {
   public id_dev !: number;
   public name_dev !: string;
   public born_in !: string;
   public skill !: string;
   public github !: string;
   public avatar_uri !: string;

   static start(sequelize: Sequelize){
      this.init({
         id_dev: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
         },
         name_dev: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         born_in: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
               isDate: true
            }
         },
         skill: {
            type: DataTypes.STRING,
            allowNull: false
         },
         github: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               isUrl: true
            }
         },
         avatar_uri: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               isUrl: true
            }
         },
      }, {
         sequelize,
         modelName: 'developer',
         tableName: 'developer',
         freezeTableName: true
      })
   }

   static associate(models: any){
      this.belongsToMany(models.agency, { through: models.hiring, foreignKey: 'id_dev', as: 'Agencies' });

   }
}

export default Developer;