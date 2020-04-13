"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Routes_1 = require("./Routes");
const celebrate_1 = require("celebrate");
const Socket_1 = __importDefault(require("./Socket"));
const Database_1 = __importDefault(require("./database/Database"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.server = new http_1.default.Server(this.app);
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(Routes_1.routes.applyRoutes());
        this.app.use(celebrate_1.errors());
        Database_1.default.initializeModels();
        const socket = new Socket_1.default(this.server);
        socket.setup();
    }
    init(port) {
        this.server.listen(port);
        console.log(`Server listening on *:${port}`);
    }
}
const server = new Server();
exports.default = server;
