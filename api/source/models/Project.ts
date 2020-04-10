import { Sequelize, Model, DataTypes } from 'sequelize';

class Project extends Model {
   public id_project !: number;
   public name_project !: string;
   public description !: string;
   public id_agency !: number;

   static start(sequelize){
      this.init({
         id_project:{
            type: DataTypes.INTEGER ,
            primaryKey: true,
            autoIncrement: true
          },
          name_project: {
            type: DataTypes.STRING,
            allowNull: false
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          id_agency: {
            type: DataTypes.INTEGER,
            references: {
              model: 'agency',
              key: 'id_agency'
            },
            allowNull: false
          }
      }, {
         sequelize,
         modelName: 'project',
         freezeTableName: true
      });
   }
   static associate(models: any){
      this.belongsTo(models.agency, {foreignKey: 'id_agency', as: 'Agency'});
   }
}

export default Project;