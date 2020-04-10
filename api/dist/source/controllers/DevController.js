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
const Developer_1 = __importDefault(require("../models/Developer"));
class DevController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const devs = yield Developer_1.default.findAll();
                return res.json(devs);
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ error: 'it was not possible to find developers' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name_dev, born_in, position, skill } = req.body;
            try {
                const dev = yield Developer_1.default.create({
                    name_dev, born_in, position, skill
                });
                return res.json(dev);
            }
            catch (err) {
                console.log(err);
                res.status(500).json({ error: 'Developer creation error' });
            }
            return res.send();
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_dev } = req.params;
            try {
                const developer = yield Developer_1.default.findByPk(id_dev, {
                    include: [{
                            association: 'Agencies',
                            through: {
                                attributes: ['date_hiring', 'date_resignation']
                            }
                        }]
                });
                return res.json(developer);
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ error: 'it was not possible to find the developer' });
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
const devController = new DevController();
exports.default = devController;
