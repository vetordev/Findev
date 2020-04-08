"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const Database_1 = __importDefault(require("./database/Database"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(routes_1.routes.applyRoutes());
        Database_1.default.initializeModels();
    }
    init(listen) {
        this.app.listen(listen);
    }
}
const server = new Server();
exports.default = server;
