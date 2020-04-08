import express from 'express';
import {routes} from './routes';
import database from './database/Database';
import cors from 'cors';
import IServer from './config/Server';

class Server implements IServer {
   app: express.Application;
   
   constructor(){
      this.app = express();

      this.app.use(cors());
      this.app.use(express.json())
      this.app.use(routes.applyRoutes())

      database.initializeModels();
   }
   init(listen: number) {
      this.app.listen(listen) 
   }
}

const server = new Server();
export default server;








