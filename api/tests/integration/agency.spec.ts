import request from 'supertest';
import server from '../../source/Server';
import {IAgency} from '../../source/config/Entities';

describe('Agency', () => {
   beforeAll(async () => {
      // await connection.migrate.rollback();
      
   })

   afterAll(async () => {
      
   })

   it ('Deve criar uma agência', async () => {
      const agency: IAgency = {
         name_agency: 'DevelopersBest'
      }

      const response = await request(server.app)
         .post('/agency')
         .send(agency);
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id_agency');
   });

   it('Deve retornar todas as agências', async () => {
      const response = await request(server.app)
         .get('/agency')
         .send();
      
      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
   });

   it('Deve retornar uma agência e suas contratações', async () => {
      const response = await request(server.app)
         .get('/agency/3/hiring')
         .send();
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id_agency');
      expect(response.body).toHaveProperty('Developers');
   });

   it('Deve retornar uma agência e seus projetos', async () => {
      const response = await request(server.app)
         .get('/agency/3/project')
         .send();
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id_agency");
      expect(response.body).toHaveProperty("Projects");
   })
});