import socketio from "socket.io";

interface ISocket {
   io: socketio.Server;
   developers: Map<number, string>;
   agencies: Map<number, string>;

   setup(): void;
   emitToDeveloper(id_dev: number): void;
   emitToAgency(id_agency: number): void;
}

export default ISocket;
