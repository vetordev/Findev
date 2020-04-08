"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Project_1 = __importDefault(require("../models/Project"));
class ProjectController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projects = yield Project_1.default.findAll({
                    include: [{
                            association: 'Agency',
                            attributes: ['name_agency']
                        }]
                });
                return res.json(projects);
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ error: 'it was not possible to find projects' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name_project, description, id_agency } = req.body;
            try {
                const project = yield Project_1.default.create({
                    name_project, description, id_agency
                });
                return res.json(project);
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ error: 'Project creation error' });
            }
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_project } = req.params;
            try {
                const project = yield Project_1.default.findByPk(id_project, {
                    include: [{
                            association: 'Agency',
                            attributes: ['name_agency']
                        }]
                });
                return res.json(project);
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ error: 'it was not possible to find projects' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send();
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send();
        });
    }
}
const projectController = new ProjectController();
exports.default = projectController;
