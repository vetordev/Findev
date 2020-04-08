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
describe('Dev', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    }));
    it('Deve criar um desenvolvedor', () => __awaiter(void 0, void 0, void 0, function* () {
        const developer = {
            name_dev: 'Carlos',
            born_in: '2000-04-05',
            position: 'Senior',
            skill: 'frontend'
        };
        const response = yield supertest_1.default(Server_1.default.app)
            .post('/dev')
            .send(developer);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id_dev');
    }));
    it('Deve retornar todos os desenvolvedores', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(Server_1.default.app)
            .get('/dev')
            .send();
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    }));
    it('Deve retornar um desenvolvedor e suas contratações', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(Server_1.default.app)
            .get(`/dev/3/hiring`)
            .send();
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id_dev');
        expect(response.body).toHaveProperty('Agencies');
    }));
});
