import { Router } from 'express';
import UsersController from '@modules/users/infra/http/controllers/UsersController';
import { celebrate, Joi } from 'celebrate';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post(
    '/',
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            password: Joi.string().required(),
            email: Joi.string().required().email(),
            role: Joi.string().required(),
        }),
    }),
    usersController.create,
);

export default usersRouter;
