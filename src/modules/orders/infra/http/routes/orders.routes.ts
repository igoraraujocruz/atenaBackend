import { Router } from 'express';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import OrdersController from '@modules/orders/infra/http/controllers/OrdersController';
import { celebrate, Joi } from 'celebrate';

const ordersRouter = Router();

const ordersController = new OrdersController();

ordersRouter.use(ensureAuthenticated);

ordersRouter.post(
    '/',
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            unimedID: Joi.string().required(),
            serviceNumber: Joi.string().required(),
        }),
    }),
    ordersController.create,
);

export default ordersRouter;
