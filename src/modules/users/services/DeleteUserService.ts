import { injectable, inject } from 'tsyringe';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

@injectable()
export default class DeleteUserService {
    constructor(
        @inject('UsersRepository') private usersRepository: IUsersRepository,
    ) {}

    public async execute(id: string): Promise<void | undefined> {
        const user = await this.usersRepository.delete(id);
        return user;
    }
}
