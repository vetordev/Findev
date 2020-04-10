import {Sequelize} from 'sequelize';
import IDatabase from '../config/Database';
import config from './config.json';
import Developer from '../models/Developer';
import Agency from '../models/Agency';
import Hiring from '../models/Hiring';
import Project from '../models/Project';


class Database implements IDatabase{
   config: object;
   database: Sequelize;

   constructor(){
      this.config = process.env.CONNECTION === 'TEST' ? config.test : config.development;
      this.database = new Sequelize(this.config);
   }

   initializeModels() {
      Developer.start(this.database);
      Agency.start(this.database);
      Hiring.start(this.database);
      Project.start(this.database);
      
      Developer.associate(this.database.models);
      Agency.associate(this.database.models);
      Hiring.associate(this.database.models);
      Project.associate(this.database.models);
   }
}

const database = new Database();
export default database;