import {Request, Response} from 'express'
import IController from '../config/Controller';
import Hiring from '../models/Hiring';

class HiringController implements IController {
   async index(req: Request, res: Response): Promise<Response> {
      
      try {
         const hirings = await Hiring.findAll({
            attributes: {exclude: ['id_dev', 'id_agency']},
            
            include: [{
               association: 'Developer',
               attributes: ['name_dev'],
            }, {
               association: 'Agency',
               attributes: ['name_agency']
            }]
         });

         return res.json(hirings);
      } catch (err) {
         console.log(err);
         return res.status(500).json({ error: "it was not possible to find agencies" });
      }
   }
   async create(req: Request, res: Response): Promise<Response> {

      const { id_dev, id_agency, date_hiring } = req.body;

      try {
         const hiring = await Hiring.create({
            id_agency, id_dev, date_hiring
         });
         return res.json(hiring);
      } catch (err) {
         console.log(err);
         return res.status(500).json({ error: "Hiring creation error (developer)" });
      }
      
   }

   async show(req: Request, res: Response): Promise<Response> {
      
      return res.send();
   }
   async update(req: Request, res: Response): Promise<Response> {
      return res.send();
   }
   async delete(req: Request, res: Response): Promise<Response> {
      return res.send();
   }
}

const hiringController = new HiringController();
export default hiringController;