import RecipientController from '@app/controllers/recipient-controller';
import SessionController from '@app/controllers/session-controller';
import IndexController from '@controllers/index-controller';
import UserController from '@controllers/user-controller';
import AuthMiddleware from '@middlewares/auth-middleware';
import { Router } from 'express';

const routes = Router();

//* Routes that don't need authentication
routes.get('/', IndexController.index);
routes.post('/session', SessionController.store);
routes.post('/users', UserController.store);

//* Routes that need authentication
routes.use(AuthMiddleware);

routes.get('/users', UserController.index);
routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);

export default routes;
