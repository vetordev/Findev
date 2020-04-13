import request from 'supertest';
import server from '../../source/Server';
import { IProject } from "../../source/config/Entities";

describe('Project', () => {

   it('Deve criar um projeto', async () => {
      const project: IProject = {
         name_project: 'Space Dogs',
         description: 'Projeto para adoção de cachorros',
         id_agency: 2,
         github: 'https://github.com/vetordev/Findev'
      };

      const response = await request(server.app)
         .post('/project')
         .send(project);
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id_project");

   });

   it('Deve retornar todos os projetos', async () => {
      const response = await request(server.app)
         .get('/project')
         .send();
   
      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0]).toHaveProperty("id_project");
      expect(response.body[0]).toHaveProperty("Agency");
   });

   it('Dever retornar um projeto e sua agência responsável', async () => {
      const response = await request(server.app)
         .get('/project/3/agency')
         .send();
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id_project");
      expect(response.body).toHaveProperty("Agency");
   })
});