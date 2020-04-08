import { Sequelize, Model, DataTypes } from 'sequelize';

class Hiring extends Model {
   public id_hiring !: number;
   public id_dev !: number;
   public id_agency !: number;
   public date_hiring !: string;
   public date_resignation !: string;

   static start(sequelize: Sequelize) {
      this.init({
         id_hiring: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
         },
         id_dev: {
            type: DataTypes.INTEGER,
            references: {
               model: 'developer',
               key: 'id_dev'
            },
            allowNull: false
         },
         id_agency: {
            type: DataTypes.INTEGER,
            references: {
               model: 'agency'
            },
            allowNull: false
         },
         date_hiring: {
            type: DataTypes.DATEONLY,
            allowNull: false
         }, 
         date_resignation: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            defaultValue: '9999-01-01'
         }   
         
      }, {
         sequelize,
         modelName: 'hiring',
         freezeTableName: true
      });
   }

   static associate(models: any){
      this.belongsTo(models.developer, {foreignKey: 'id_dev', as: 'Developer'});
      this.belongsTo(models.agency, {foreignKey: 'id_agency', as: 'Agency'});
   }
}

export default Hiring;