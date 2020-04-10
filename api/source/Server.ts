import {routes} from './Routes';
import { errors } from "celebrate";
import IServer from './config/Server';
import Socket from "./Socket";
import database from './database/Database';
import express from 'express';
import cors from 'cors';
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

      const socket = new Socket(this.server);
      socket.setup();
      
   }
   init(port: number) {
      this.server.listen(port) 
      console.log(`Server listening on *:${port}`)
   }
}

const server = new Server();
export default server;








