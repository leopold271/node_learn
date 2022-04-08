import { Express, Request, Response} from 'express'
import { createUserHandler } from './controller/user.controller';
import validateResource from './middleware/validateResource';
import {createUserShema} from './shema/user.shema';
import {createSessionSchema} from './shema/session.shema';
import { createUserSessionHandler } from './controller/session.controller'
 
function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post('/api/users', validateResource(createUserShema), createUserHandler);

  app.post('/api/sessions', validateResource(createSessionSchema), createUserSessionHandler);
  
}

export default routes;