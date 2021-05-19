import 'reflect-metadata';
import dontenv from 'dotenv';
import '@shared/infra/typeorm';
import express from 'express';
import routes from './routes';
import '@shared/container';

const app = express();
dontenv.config();
app.use(express.json());
app.use(routes);

app.listen(3335, () => {
    console.log('Server started on port 3335');
});
