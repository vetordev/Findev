import request from 'supertest';
import server from '../../source/Server';
import {IDeveloper} from '../../source/config/Entities';

describe('Dev', () => {
   beforeAll(async () => {

   });

   afterAll(async () => {
      
   })

   it('Deve criar um desenvolvedor', async () => {

      const developer: IDeveloper = {
         name_dev: 'Carlos',
         born_in: '2000-04-05',
         skill: 'frontend',
         github: 'https://github.com/vetordev'
      }

      const response = await request(server.app)
         .post('/dev')
         .send(developer);
         expect(response.status).toBe(200);
         expect(response.body).toHaveProperty('id_dev');
      
   });

   it('Deve retornar todos os desenvolvedores', async () => {
      const response = await request(server.app)
         .get('/dev')
         .send();

      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
   });

   it('Deve retornar um desenvolvedor e suas contratações', async () => {

      const response = await request(server.app)
         .get(`/dev/3/hiring`)
         .send();
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id_dev');
      expect(response.body).toHaveProperty('Agencies');
      
   });

   it('Deve retornar desenvolvedores que se encaixem na condição do like', async () => {
      const response = await request(server.app)
         .get('/dev/4')
         .send();

      expect(response.status).toBe(200);
   })

   
   
})