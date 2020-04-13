"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
class Socket {
    constructor(server) {
        this.io = socket_io_1.default(server);
        this.developers = new Map();
        this.agencies = new Map();
    }
    setup() {
        //Quando um cliente se conecta a aplicação
        this.io.on('connect', (socket) => {
            console.log(`new connection: ${socket.id}`);
            //Insere o id_dev da base de dados como chave para o seu socket.id
            socket.on('new developer', (id_dev) => {
                this.developers.set(id_dev, socket.id);
                this.emitToDeveloper(56, 'hi dev');
            });
            //Insere o id_agency da base de dados como chave para o seu socket.id
            socket.on('new agency', (id_agency) => {
                this.agencies.set(id_agency, socket.id);
            });
        });
    }
    emitToDeveloper(id_dev, message) {
        const to = this.developers.get(id_dev);
        if (to === undefined)
            return false;
        this.io.to(to).emit('warning', message);
    }
    emitToAgency(id_agency, message) {
        const to = this.agencies.get(id_agency);
        if (to === undefined)
            return false;
        this.io.to(to).emit('warning', message);
    }
}
exports.default = Socket;
