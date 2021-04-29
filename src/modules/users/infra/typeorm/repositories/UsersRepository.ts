import { getRepository, Repository } from 'typeorm';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

export default class UsersRepository implements IUsersRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async create({
        name,
        password,
        email,
        role,
    }: ICreateUserDTO): Promise<User> {
        const user = this.ormRepository.create({ name, password, email, role });
        await this.ormRepository.save(user);
        return user;
    }

    public async delete(id: string): Promise<void | undefined> {
        this.ormRepository.delete(id);
    }

    public async save(user: User): Promise<User> {
        return this.ormRepository.save(user);
    }
}
