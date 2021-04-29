import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateUserService from '@modules/users/services/CreateUserService';
import DeleteUserService from '@modules/users/services/DeleteUserService';

export default class UsersController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name, password, email, role } = request.body;
        const create = container.resolve(CreateUserService);
        const user = await create.execute({ name, password, email, role });
        return response.json(classToClass(user));
    }

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.params;
        const deleteUser = container.resolve(DeleteUserService);
        const user = await deleteUser.execute(id);
        return response.json(classToClass(user));
    }
}
