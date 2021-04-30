import { getRepository, Repository } from 'typeorm';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';
import IUserDTO from '@modules/users/dtos/IUserDTO';
import AppError from '@shared/errors/AppError';

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
    }: IUserDTO): Promise<User> {
        const user = this.ormRepository.create({ name, password, email, role });
        await this.ormRepository.save(user);
        return user;
    }

    public async delete(id: string): Promise<void | undefined> {
        this.ormRepository.delete(id);
    }

    public async update({
        id,
        name,
        password,
        email,
        role,
    }: IUserDTO): Promise<User> {
        const user = await this.ormRepository.findOne(id);

        if (!user) {
            throw new AppError('User not found');
        }

        user.name = name;
        user.password = password;
        user.email = email;
        user.role = role;

        return this.ormRepository.save(user);
    }

    public async save(user: User): Promise<User> {
        return this.ormRepository.save(user);
    }
}
