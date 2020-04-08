import request from 'supertest';
import server from '../../source/Server';
import {IHiring} from '../../source/config/Entities';


describe('Hiring', () => {
   beforeAll(async () => {
      // await connection.migrate.rollback();

   })

   afterAll(async () => {
      
   })
   
   it('Deve criar uma contratação', async () => {

      const hiring: IHiring = {
         id_dev: 1,
         id_agency: 1,
         date_hiring: '2020-04-04'
      }
      
      const response = await request(server.app)
         .post('/hiring')
         .send(hiring);
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id_hiring');
      
   
   });

   it('Deve retornar todas as contratações', async () => {

      const response = await request(server.app)
         .get('/hiring')
         .send();

      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);

      expect(response.body[0]).toHaveProperty('id_hiring');
      expect(response.body[0]).toHaveProperty('Agency');
      expect(response.body[0]).toHaveProperty('Developer');
   });
   
})

