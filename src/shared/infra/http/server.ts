import 'reflect-metadata';
import dontenv from 'dotenv';
import '@shared/infra/typeorm';
import express, { Request, Response } from 'express';
import 'express-async-errors';
import AppError from '@shared/errors/AppError';
import routes from './routes';
import '@shared/container';

const app = express();
dontenv.config();
app.use(express.json());
app.use(routes);

app.use(
    (error: Error, _request: Request, response: Response) => {
        if (error instanceof AppError) {
            const { statusCode } = error;

            return response.status(statusCode).json({
                status: 'error',
                message: error.message,
            });
        }

        return response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    },
);

app.listen(3335, () => {
    console.log('Server started');
});
