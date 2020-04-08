import { Sequelize } from "sequelize/types";

interface IDatabase {
   config: object;
   database: Sequelize

   initializeModels(): void;
}

export default IDatabase;