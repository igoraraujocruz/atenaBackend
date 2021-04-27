import Order from '@modules/orders/infra/typeorm/entities/Order';
import IOrderRepository from '@modules/orders/repositories/IOrderRepository';
import { injectable, inject } from 'tsyringe';

interface IRequestDTO {
    name: string;
    unimedID: string;
    serviceNumber: string;
    doctor_id: string;
}

@injectable()
export default class CreateOrderService {
    constructor(
        @inject('OrdersRepository') private ordersRepository: IOrderRepository,
    ) {}

    public async execute({
        name,
        unimedID,
        serviceNumber,
        doctor_id,
    }: IRequestDTO): Promise<Order> {
        const order = await this.ordersRepository.create({
            name,
            unimedID,
            serviceNumber,
            doctor_id,
        });
        return order;
    }
}
