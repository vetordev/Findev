"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_json_1 = __importDefault(require("./config.json"));
const Developer_1 = __importDefault(require("../models/Developer"));
const Agency_1 = __importDefault(require("../models/Agency"));
const Hiring_1 = __importDefault(require("../models/Hiring"));
const Project_1 = __importDefault(require("../models/Project"));
class Database {
    constructor() {
        this.config = process.env.CONNECTION === 'TEST' ? config_json_1.default.test : config_json_1.default.development;
        this.database = new sequelize_1.Sequelize(this.config);
    }
    initializeModels() {
        Developer_1.default.start(this.database);
        Agency_1.default.start(this.database);
        Hiring_1.default.start(this.database);
        Project_1.default.start(this.database);
        Developer_1.default.associate(this.database.models);
        Agency_1.default.associate(this.database.models);
        Hiring_1.default.associate(this.database.models);
        Project_1.default.associate(this.database.models);
    }
}
const database = new Database();
exports.default = database;
