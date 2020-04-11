import socketio from "socket.io";
import ISocket from "./config/Socket";
import http from 'http';

class Socket implements ISocket {
   io: socketio.Server;
   developers: Map<number, string>;
   agencies: Map<number, string>;

   constructor(server: http.Server){
      this.io = socketio(server);
      this.developers = new Map();
      this.agencies = new Map();
   }

   setup(){
      
      //Quando um cliente se conecta a aplicação
      this.io.on('connect', (socket) => {
         console.log(`new connection: ${socket.id}`);

         //Insere o id_dev da base de dados como chave para o seu socket.id
         socket.on('new developer', (id_dev: number) => {
            this.developers.set(id_dev, socket.id);
            this.emitToDeveloper(56, 'hi dev')
         });
         //Insere o id_agency da base de dados como chave para o seu socket.id
         socket.on('new agency', (id_agency: number) => {
            this.agencies.set(id_agency, socket.id);
         });

      });

      
   }

   emitToDeveloper(id_dev: number, message: string){
      const to = this.developers.get(id_dev);
      if(to === undefined)
         return false;
      
      this.io.to(to).emit('warning', message);
   }

   emitToAgency(id_agency: number, message: string){
      const to = this.agencies.get(id_agency);
      if(to === undefined)
         return false;
      
      this.io.to(to).emit('warning', message)
   }
}

export default Socket;