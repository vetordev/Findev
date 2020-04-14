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
const celebrate_1 = require("celebrate");
class Routes {
    constructor() {
        this.app = express_1.Router();
    }
    applyRoutes() {
        /*DEV*/
        this.app.get('/dev', DevController_1.default.index);
        this.app.get('/dev/:id_dev/hiring', celebrate_1.celebrate({
            [celebrate_1.Segments.PARAMS]: celebrate_1.Joi.object().keys({
                id_dev: celebrate_1.Joi.number().integer().required()
            })
        }), DevController_1.default.show);
        this.app.post('/dev', celebrate_1.celebrate({
            [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
                name_dev: celebrate_1.Joi.string().required(),
                born_in: celebrate_1.Joi.date().required(),
                skill: celebrate_1.Joi.string().required(),
                github: celebrate_1.Joi.string().uri().required()
            })
        }), DevController_1.default.create);
        /*AGENCY */
        this.app.get('/agency', AgencyController_1.default.index);
        this.app.get('/agency/:id_agency/hiring', celebrate_1.celebrate({
            [celebrate_1.Segments.PARAMS]: celebrate_1.Joi.object().keys({
                id_agency: celebrate_1.Joi.number().integer().required()
            })
        }), AgencyController_1.default.show);
        this.app.post('/agency', celebrate_1.celebrate({
            [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
                name_agency: celebrate_1.Joi.string().required(),
                email: celebrate_1.Joi.string().required()
            })
        }), AgencyController_1.default.create);
        this.app.get('/agency/:id_agency/project', celebrate_1.celebrate({
            [celebrate_1.Segments.PARAMS]: celebrate_1.Joi.object().keys({
                id_agency: celebrate_1.Joi.number().integer().required(),
            })
        }), AgencyController_1.default.showProjects);
        /*HIRING */
        this.app.get('/hiring', HiringController_1.default.index);
        this.app.post('/hiring', celebrate_1.celebrate({
            [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
                id_dev: celebrate_1.Joi.number().integer().required(),
                id_agency: celebrate_1.Joi.number().integer().required(),
                position: celebrate_1.Joi.string().required(),
                date_hiring: celebrate_1.Joi.date().required(),
            })
        }), HiringController_1.default.create);
        /*PROJECT */
        this.app.get('/project', ProjectController_1.default.index);
        this.app.get('/project/:id_project/agency', celebrate_1.celebrate({
            [celebrate_1.Segments.PARAMS]: celebrate_1.Joi.object().keys({
                id_project: celebrate_1.Joi.number().integer().required()
            })
        }), ProjectController_1.default.show);
        this.app.post('/project', celebrate_1.celebrate({
            [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
                name_project: celebrate_1.Joi.string().required(),
                description: celebrate_1.Joi.string().required(),
                id_agency: celebrate_1.Joi.number().integer().required(),
                github: celebrate_1.Joi.string().uri().required()
            })
        }), ProjectController_1.default.create);
        return this.app;
    }
}
exports.routes = new Routes();
