import { Router } from 'express';

import HomeController from './app/controllers/home-controller';

const routes = Router();

routes.get('/', HomeController.index);

routes.post('/user', HomeController.store);

export default routes;
