"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HiringController_1 = __importDefault(require("./controllers/HiringController"));
const DevController_1 = __importDefault(require("./controllers/DevController"));
const AgencyController_1 = __importDefault(require("./controllers/AgencyController"));
const ProjectController_1 = __importDefault(require("./controllers/ProjectController"));
class Routes {
    constructor() {
        this.app = express_1.Router();
    }
    applyRoutes() {
        this.app.get('/dev', DevController_1.default.index);
        this.app.get('/dev/:id_dev/hiring', DevController_1.default.show);
        this.app.post('/dev', DevController_1.default.create);
        this.app.get('/agency', AgencyController_1.default.index);
        this.app.get('/agency/:id_agency/hiring', AgencyController_1.default.show);
        this.app.post('/agency', AgencyController_1.default.create);
        this.app.get('/agency/:id_agency/project', AgencyController_1.default.showProjects);
        this.app.get('/hiring', HiringController_1.default.index);
        this.app.post('/hiring', HiringController_1.default.create);
        this.app.get('/hiring/:id_dev/:id_agency', HiringController_1.default.show);
        this.app.get('/project', ProjectController_1.default.index);
        this.app.get('/project/:id_project/agency', ProjectController_1.default.show);
        this.app.post('/project', ProjectController_1.default.create);
        return this.app;
    }
}
exports.routes = new Routes();
