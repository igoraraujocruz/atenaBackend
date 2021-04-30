import { injectable, inject } from 'tsyringe';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';

interface IRequestDTO {
    id: string;
    name: string;
    password: string;
    email: string;
    role: string;
}

@injectable()
export default class UpdateUserService {
    constructor(
        @inject('UsersRepository') private usersRepository: IUsersRepository,
    ) {}

    public async execute({
        name,
        password,
        email,
        role,
    }: IRequestDTO): Promise<User> {
        const user = await this.usersRepository.update({
            name,
            password,
            email,
            role,
        });

        return user;
    }
}
