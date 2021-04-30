import { injectable, inject } from 'tsyringe';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';

@injectable()
export default class ListUserService {
    constructor(
        @inject('UsersRepository') private usersRepository: IUsersRepository,
    ) {}

    public async execute(): Promise<User[]> {
        const user = await this.usersRepository.listAll();
        return user;
    }
}
