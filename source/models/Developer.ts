import { Sequelize, Model, DataTypes } from 'sequelize';

class Developer extends Model {
   public id_dev !: number;
   public name_dev !: string;
   public born_in !: string;
   public position !: string;
   public skill !: string;

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
            allowNull: false
         },
         position: {
            type: DataTypes.STRING,
            allowNull: false
         },
         skill: {
            type: DataTypes.STRING,
            allowNull: false
         }
      }, {
         sequelize,
         modelName: 'developer',
         freezeTableName: true
      })
   }

   static associate(models: any){
      this.belongsToMany(models.agency, { through: models.hiring, foreignKey: 'id_dev', as: 'Agencies' });

   }
}

export default Developer;