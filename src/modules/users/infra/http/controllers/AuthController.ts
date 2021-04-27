import { Request, Response } from 'express';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import { classToClass } from 'class-transformer';
import { container } from 'tsyringe';

export default class AuthController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name, password } = request.body;

        const authController = container.resolve(AuthenticateUserService);

        const { user, token } = await authController.execute({
            name,
            password,
        });

        return response.json({ user: classToClass(user), token });
    }
}
