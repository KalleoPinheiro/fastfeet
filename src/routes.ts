import DeliverymanController from '@app/controllers/deliveryman-controller';
import FileController from '@app/controllers/file-controller';
import RecipientController from '@app/controllers/recipient-controller';
import SessionController from '@app/controllers/session-controller';
import multerConfig from '@configs/multer';
import IndexController from '@controllers/index-controller';
import UserController from '@controllers/user-controller';
import AuthMiddleware from '@middlewares/auth-middleware';
import { Router } from 'express';
import multer from 'multer';

const routes = Router();
const upload = multer(multerConfig);

//? Routes that don't need authentication
routes.get('/', IndexController.index);
routes.post('/session', SessionController.store);
routes.post('/users', UserController.store);

//? Routes that need authentication
routes.use(AuthMiddleware);

//* Files router
routes.post('/files', upload.single('file'), FileController.store);

//* User routes
routes.get('/users', UserController.index);

//* Recipient routes
routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.patch('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

//* Deliveryman routes
routes.get('/deliverers', DeliverymanController.index);
routes.post('/deliverers', DeliverymanController.store);
routes.patch('/deliverers/:id', DeliverymanController.update);
routes.delete('/deliverers/:id', DeliverymanController.remove);

export default routes;
