import { Router } from 'express';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import OrdersController from '@modules/orders/infra/http/controllers/OrdersController';

const ordersRouter = Router();

const ordersController = new OrdersController();

ordersRouter.use(ensureAuthenticated);

ordersRouter.post('/', ordersController.create);

export default ordersRouter;
