import socketio from "socket.io";
import ISocket from "./config/Socket";
import http from 'http';

class Socket implements ISocket {
   io: socketio.Server;

   constructor(server: http.Server){
      this.io = socketio(server);
   }

   setup(){

   }
}

export default Socket;