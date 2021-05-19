import { Router } from 'express';
import cors from 'cors';
import ordersRouter from '@modules/orders/infra/http/routes/orders.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();
routes.use(cors());
routes.use('/orders', ordersRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
