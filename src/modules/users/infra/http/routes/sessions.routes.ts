import { Router } from 'express';
import AuthController from '@modules/users/infra/http/controllers/AuthController';

const sessionsRouter = Router();
const authController = new AuthController();

sessionsRouter.post('/', authController.create);

export default sessionsRouter;
