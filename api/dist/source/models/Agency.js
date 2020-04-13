"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Agency extends sequelize_1.Model {
    static start(sequelize) {
        this.init({
            id_agency: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name_agency: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'agency',
            freezeTableName: true
        });
    }
    static associate(models) {
        this.belongsToMany(models.developer, { through: models.hiring, foreignKey: 'id_agency', as: 'Developers' });
        this.hasMany(models.project, { foreignKey: 'id_agency', as: 'Projects' });
    }
}
exports.default = Agency;
