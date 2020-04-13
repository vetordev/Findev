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
const Hiring_1 = __importDefault(require("../models/Hiring"));
class HiringController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hirings = yield Hiring_1.default.findAll({
                    attributes: { exclude: ['id_dev', 'id_agency'] },
                    include: [{
                            association: 'Developer',
                            attributes: ['name_dev'],
                        }, {
                            association: 'Agency',
                            attributes: ['name_agency']
                        }]
                });
                return res.json(hirings);
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ error: "it was not possible to find agencies" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_dev, id_agency, date_hiring, position } = req.body;
            try {
                const hiring = yield Hiring_1.default.create({
                    id_agency, id_dev, date_hiring, position
                });
                return res.json(hiring);
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ error: "Hiring creation error (developer)" });
            }
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send();
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
const hiringController = new HiringController();
exports.default = hiringController;
