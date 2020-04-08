import {Router} from 'express';
import IRoutes from './config/Routes';
import hiringController from './controllers/HiringController';
import devController from './controllers/DevController'
import agencyController from './controllers/AgencyController';
import projectController from './controllers/ProjectController';


class Routes implements IRoutes {
   app: Router;

   constructor() {
      this.app = Router();

   }

   applyRoutes(){

      this.app.get('/dev', devController.index);   
      this.app.get('/dev/:id_dev/hiring', devController.show);
      this.app.post('/dev', devController.create);


      this.app.get('/agency', agencyController.index);
      this.app.get('/agency/:id_agency/hiring', agencyController.show);
      this.app.post('/agency', agencyController.create);
      this.app.get('/agency/:id_agency/project', agencyController.showProjects);

      this.app.get('/hiring', hiringController.index);
      this.app.post('/hiring', hiringController.create);
      this.app.get('/hiring/:id_dev/:id_agency', hiringController.show);
      

      this.app.get('/project', projectController.index);
      this.app.get('/project/:id_project/agency', projectController.show);
      this.app.post('/project', projectController.create);
   
      return this.app;
   }

}

export const routes = new Routes()