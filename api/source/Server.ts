import express from 'express';
import {routes} from './Routes';
import database from './database/Database';
import cors from 'cors';
import IServer from './config/Server';
import { errors } from "celebrate";
import http from "http";

class Server implements IServer {
   app: express.Application;
   server: http.Server;

   constructor(){
      this.app = express();
      this.server = new http.Server(this.app);

      this.app.use(cors());
      this.app.use(express.json());
      this.app.use(routes.applyRoutes());
      this.app.use(errors());


      database.initializeModels();
   }
   init(port: number) {
      this.server.listen(port) 
   }
}

const server = new Server();
export default server;








