"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Developer extends sequelize_1.Model {
    static start(sequelize) {
        this.init({
            id_dev: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name_dev: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            born_in: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false,
                validate: {
                    isDate: true
                }
            },
            skill: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            github: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                validate: {
                    isUrl: true
                }
            }
        }, {
            sequelize,
            modelName: 'developer',
            tableName: 'developer',
            freezeTableName: true
        });
    }
    static associate(models) {
        this.belongsToMany(models.agency, { through: models.hiring, foreignKey: 'id_dev', as: 'Agencies' });
    }
}
exports.default = Developer;
