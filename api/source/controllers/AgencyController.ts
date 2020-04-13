import {Request, Response} from 'express'
import IController from '../config/Controller';
import Agency from '../models/Agency';

class AgencyController implements IController{

   async index(req: Request, res: Response): Promise<Response> {
      try {
         const agencies = await Agency.findAll();

         return res.json(agencies)
      } catch (err) {
         console.log(err)
         return res.status(500).json({ error: "it was not possible to find agencies" });
      }

   }
   async create(req: Request, res: Response): Promise<Response> {
      const { name_agency, email } = req.body;
      
      try {
         const agency = await Agency.create({
            name_agency, email
         });

         return res.json(agency);
      } catch (err) {
         console.log(err)
         return res.status(500).json({ error: "Agency creation error" });
      }
   }
   async show(req: Request, res: Response): Promise<Response>{
      const { id_agency } = req.params;

      try {
         const agencies_hiring = await Agency.findByPk(id_agency, {
            include : [{
               association: 'Developers',
               attributes: ['name_dev', 'github', 'skill'],
               through: {
                  attributes: ['date_hiring', 'date_resignation']
               }
            }]
         });
         
         return res.json(agencies_hiring);
      } catch (err) {
         console.log(err)
         return res.status(500).json({ error: "it was not possible to find the agency" });
      }
      

   }
   async showProjects(req: Request, res: Response): Promise<Response> {
      const {id_agency} = req.params;

      try {
         const agencies_projects = await await Agency.findByPk(id_agency, {
            include: [{
               association: 'Projects',
               attributes: ['name_project', 'description']
            }]
         });
         return res.json(agencies_projects);

      } catch (err) {
         console.log(err);
         return res.status(500).json({ error: "it was not possible to find the agency" });
      }
   }

   async update(req: Request, res: Response): Promise<Response> {
      return res.send()
   }
   async delete(req: Request, res: Response): Promise<Response> {
      return res.send()
   }
}

const agencyController = new AgencyController();
export default agencyController;