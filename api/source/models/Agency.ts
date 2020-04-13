import { Sequelize, Model, DataTypes} from 'sequelize';

class Agency extends Model {
   public id_agency !: number;
   public name_agency !: string;

   static start(sequelize: Sequelize) {
      
      this.init({
         id_agency: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
         },
         name_agency: {
            type: DataTypes.STRING,
            allowNull: false
         },
         email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               isEmail: true
            }
          }
      }, {
         sequelize,
         modelName: 'agency',
         tableName: 'agency',
         freezeTableName: true
      });
   }

   static associate(models: any){
      this.belongsToMany(models.developer, { through: models.hiring, foreignKey: 'id_agency', as: 'Developers' });
      this.hasMany(models.project, {foreignKey: 'id_agency', as: 'Projects'});
   }
}

export default Agency;
