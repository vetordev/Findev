import { Router } from "express";

interface IRoutes {
   app: Router;

   applyRoutes(): Router;
}
export default IRoutes;
