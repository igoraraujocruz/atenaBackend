import { Router } from 'express';
import AuthController from '@modules/users/infra/http/controllers/AuthController';
import { celebrate, Joi } from 'celebrate';

const sessionsRouter = Router();
const authController = new AuthController();

sessionsRouter.post(
    '/',
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            password: Joi.string().required(),
        }),
    }),
    authController.create,
);

export default sessionsRouter;
