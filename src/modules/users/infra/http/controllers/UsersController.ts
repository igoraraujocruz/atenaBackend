import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name, password, email, role } = request.body;
        const create = container.resolve(CreateUserService);
        const user = await create.execute({ name, password, email, role });
        return response.json(user);
    }
}
