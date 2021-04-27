import { getRepository, Repository } from 'typeorm';
import Order from '@modules/orders/infra/typeorm/entities/Order';
import IOrderRepository from '@modules/orders/repositories/IOrderRepository';
import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';

export default class OrdersRepository implements IOrderRepository {
    private ormRepository: Repository<Order>;

    constructor() {
        this.ormRepository = getRepository(Order);
    }

    public async create({
        name,
        serviceNumber,
        unimedID,
        doctor_id,
    }: ICreateOrderDTO): Promise<Order> {
        const order = this.ormRepository.create({
            name,
            serviceNumber,
            unimedID,
            doctor_id,
        });
        await this.ormRepository.save(order);
        return order;
    }

    public async save(order: Order): Promise<Order> {
        return this.ormRepository.save(order);
    }
}
