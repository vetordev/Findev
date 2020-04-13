import {Request, Response} from 'express'
import IController from '../config/Controller';
import Project from '../models/Project';

class ProjectController implements IController{
   async index(req: Request, res: Response): Promise<Response> {
      
      try {
         const projects = await Project.findAll({
            include: [{
               association: 'Agency',
               attributes: ['name_agency']
            }]
         });

         return res.json(projects);
      } catch (err) {
         console.log(err);
         return res.status(500).json({error: 'it was not possible to find projects'});
      }

   }
   async create(req: Request, res: Response): Promise<Response> {
      const { name_project, description, id_agency, github } = req.body;

      try {
         
         const project = await Project.create({
            name_project, description, id_agency, github
         });

         return res.json(project);
      } catch (err) {
         console.log(err);
         return res.status(500).json({error: 'Project creation error'});
      }
   }
   async show(req: Request, res: Response): Promise<Response> {
      const { id_project } = req.params;

      try {
         const project = await Project.findByPk(id_project, {
            include: [{
               association: 'Agency',
               attributes: ['name_agency']
            }]
         });

         return res.json(project);
      } catch (err) {
         console.log(err);
         return res.status(500).json({error: 'it was not possible to find projects'});
      }

   }
   async update(req: Request, res: Response): Promise<Response> {
      return res.send();
   }
   async delete(req: Request, res: Response): Promise<Response> {
      return res.send();
   }

}

const projectController = new ProjectController();
export default projectController;