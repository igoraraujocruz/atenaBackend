import { Router } from 'express';
import UsersController from '@modules/users/infra/http/controllers/UsersController';
import { celebrate, Joi, Segments } from 'celebrate';

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

usersRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    usersController.delete,
);

usersRouter.put(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
        body: Joi.object().keys({
            name: Joi.string().required(),
            password: Joi.string().required(),
            email: Joi.string().required().email(),
            role: Joi.string().required(),
        }),
    }),
    usersController.update,
);

usersRouter.get('/', usersController.listAll);

export default usersRouter;
