import {Request, Response} from 'express';
import { Op } from "sequelize";
import IController from '../config/Controller';
import Developer from '../models/Developer';

class DevController implements IController {
   async index(req: Request, res: Response): Promise<Response> {

      try {
         const devs = await Developer.findAll();   

         return res.json(devs);
      } catch (err) {
            console.log(err);
            return res.status(500).json({error: 'it was not possible to find developers'});

      }
      
   }
   async create(req: Request, res: Response): Promise<Response> {
      const { name_dev, born_in, skill, github } = req.body;
      
      try {
         const dev = await Developer.create({
            name_dev, born_in, skill, github
         });

         return res.json(dev);
         
      }catch(err) {
         console.log(err)
         res.status(500).json({error: 'Developer creation error'})
      }

      return res.send();
   }
   async show(req: Request, res: Response): Promise<Response> {

      const { id_dev } = req.params;
      try {
         const developer = await Developer.findByPk(id_dev, {
            include: [{
               association: 'Agencies',
               through: {
                  attributes: ['date_hiring', 'date_resignation']
               }
            }]
         })
         return res.json(developer);   
      } catch (err) {
         console.log(err);
         return res.status(500).json({ error: 'it was not possible to find the developer' });
      }
   }
   async findByName(req: Request, res: Response): Promise<Response> {
      const { name_dev } = req.params;

      try {
         const developers = await Developer.findAll({
            where: {
               name_dev: {
                  [Op.like]: `${name_dev}%`
               }
            }
         });   
         return res.json(developers)
      } catch (err) {
         console.log(err)
         return res.status(500).json({ error: 'it was not possible to find the developer' });
      }


   }
   async update(req: Request, res: Response): Promise<Response> {
      return res.send();
   }
   async delete(req: Request, res: Response): Promise<Response> {
      return res.send();
   }

}
const devController = new DevController();
export default devController;