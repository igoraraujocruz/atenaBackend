import User from '@modules/users/infra/typeorm/entities/User';
import IUserDTO from '@modules/users/dtos/IUserDTO';

export default interface IUsersRepository {
    create(data: IUserDTO): Promise<User>;
    delete(id: string): Promise<void | undefined>;
    update(data: IUserDTO): Promise<User>;
}
