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
const Agency_1 = __importDefault(require("../models/Agency"));
class AgencyController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agencies = yield Agency_1.default.findAll();
                return res.json(agencies);
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ error: "it was not possible to find agencies" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name_agency } = req.body;
            try {
                const agency = yield Agency_1.default.create({
                    name_agency
                });
                return res.json(agency);
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ error: "Agency creation error" });
            }
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_agency } = req.params;
            try {
                const agencies_hiring = yield Agency_1.default.findByPk(id_agency, {
                    include: [{
                            association: 'Developers',
                            attributes: ['name_dev', 'position', 'skill'],
                            through: {
                                attributes: ['date_hiring', 'date_resignation']
                            }
                        }]
                });
                return res.json(agencies_hiring);
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ error: "it was not possible to find the agency" });
            }
        });
    }
    showProjects(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_agency } = req.params;
            try {
                const agencies_projects = yield yield Agency_1.default.findByPk(id_agency, {
                    include: [{
                            association: 'Projects',
                            attributes: ['name_project', 'description']
                        }]
                });
                return res.json(agencies_projects);
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ error: "it was not possible to find the agency" });
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
const agencyController = new AgencyController();
exports.default = agencyController;
