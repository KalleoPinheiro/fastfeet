import { Router } from 'express';

import ErrorMiddleware from '@middlewares/error-middleware';

import HomeController from '@controllers/home-controller';
import UserController from '@controllers/user-controller';
import RecipientController from '@app/controllers/recipient-controller';

const routes = Router();

routes.get('/', HomeController.index);

routes.get('/users', UserController.index);
routes.get('/recipients', RecipientController.index);
routes.post('/users', ErrorMiddleware, UserController.store);
routes.post('/recipients', ErrorMiddleware, RecipientController.store);

export default routes;
