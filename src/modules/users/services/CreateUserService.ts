import { hash } from 'bcryptjs';
import { injectable, inject } from 'tsyringe';
import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IRequestDTO {
    name: string;
    password: string;
    email: string;
    role: string;
}

@injectable()
export default class CreateUserService {
    constructor(
        @inject('UsersRepository') private usersRepository: IUsersRepository,
    ) {}

    public async execute({
        name,
        password,
        email,
        role,
    }: IRequestDTO): Promise<User> {
        const hashedPassword = await hash(password, 8);

        const user = await this.usersRepository.create({
            name,
            password: hashedPassword,
            email,
            role,
        });
        return user;
    }
}
