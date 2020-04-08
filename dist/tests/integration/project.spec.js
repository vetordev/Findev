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
const supertest_1 = __importDefault(require("supertest"));
const Server_1 = __importDefault(require("../../source/Server"));
describe('Project', () => {
    it('Deve criar um projeto', () => __awaiter(void 0, void 0, void 0, function* () {
        const project = {
            name_project: 'Space Dogs',
            description: 'Projeto para adoção de cachorros',
            id_agency: 2
        };
        const response = yield supertest_1.default(Server_1.default.app)
            .post('/project')
            .send(project);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("id_project");
    }));
    it('Deve retornar todos os projetos', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(Server_1.default.app)
            .get('/project')
            .send();
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toHaveProperty("id_project");
        expect(response.body[0]).toHaveProperty("Agency");
    }));
    it('Dever retornar um projeto e sua agência responsável', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(Server_1.default.app)
            .get('/project/3/agency')
            .send();
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("id_project");
        expect(response.body).toHaveProperty("Agency");
    }));
});
