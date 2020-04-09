import {Router} from 'express';
import IRoutes from './config/Routes';
import hiringController from './controllers/HiringController';
import devController from './controllers/DevController'
import agencyController from './controllers/AgencyController';
import projectController from './controllers/ProjectController';

import {celebrate, Joi, Segments} from 'celebrate';

class Routes implements IRoutes {
   app: Router;

   constructor() {
      this.app = Router();

   }

   applyRoutes(){

      /*DEV*/
      this.app.get('/dev', devController.index);   

      this.app.get('/dev/:id_dev/hiring', celebrate({
         [Segments.PARAMS]: Joi.object().keys({
            id_dev: Joi.number().integer().required()
         })
      }),devController.show);

      this.app.post('/dev', celebrate({
         [Segments.BODY]: Joi.object().keys({
            name_dev: Joi.string().required(),
            born_in: Joi.date().required(),
            position: Joi.string().required(),
            skill: Joi.string().required()
         })
      }), devController.create);

      /*AGENCY */
      this.app.get('/agency', agencyController.index);
      this.app.get('/agency/:id_agency/hiring', celebrate({
         [Segments.PARAMS]: Joi.object().keys({
            id_agency: Joi.number().integer().required()
         })
      }), agencyController.show);

      this.app.post('/agency', celebrate({
         [Segments.BODY]: Joi.object().keys({
            name_agency: Joi.string().required()
         })
      }), agencyController.create);

      this.app.get('/agency/:id_agency/project', celebrate({
         [Segments.PARAMS]: Joi.object().keys({
            id_agency: Joi.number().integer().required()
         })
      }), agencyController.showProjects);

      /*HIRING */
      this.app.get('/hiring', hiringController.index);
      this.app.post('/hiring', celebrate({
         [Segments.BODY]: Joi.object().keys({
            id_dev: Joi.number().integer().required(),
            id_agency: Joi.number().integer().required(),
            date_hiring: Joi.date().required()
         })
      }), hiringController.create);

      /*PROJECT */
      this.app.get('/project', projectController.index);
      this.app.get('/project/:id_project/agency', celebrate({
         [Segments.PARAMS]: Joi.object().keys({
            id_project: Joi.number().integer().required()
         })
      }),projectController.show);
      this.app.post('/project', celebrate({
         [Segments.BODY]: Joi.object().keys({
            name_project: Joi.string().required(),
            description: Joi.string().required(),
            id_agency: Joi.number().integer().required(),
         })
      }), projectController.create);
   
      return this.app;
   }

}

export const routes = new Routes()