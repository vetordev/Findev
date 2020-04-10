import socketio from "socket.io";
import http from 'http';

interface ISocket {
   io: socketio.Server;
   
   setup(): void;
}

export default ISocket;