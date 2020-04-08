"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Hiring extends sequelize_1.Model {
    static start(sequelize) {
        this.init({
            id_hiring: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            id_dev: {
                type: sequelize_1.DataTypes.INTEGER,
                references: {
                    model: 'developer',
                    key: 'id_dev'
                },
                allowNull: false
            },
            id_agency: {
                type: sequelize_1.DataTypes.INTEGER,
                references: {
                    model: 'agency'
                },
                allowNull: false
            },
            date_hiring: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false
            },
            date_resignation: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true,
                defaultValue: '9999-01-01'
            }
        }, {
            sequelize,
            modelName: 'hiring',
            freezeTableName: true
        });
    }
    static associate(models) {
        this.belongsTo(models.developer, { foreignKey: 'id_dev', as: 'Developer' });
        this.belongsTo(models.agency, { foreignKey: 'id_agency', as: 'Agency' });
    }
}
exports.default = Hiring;
