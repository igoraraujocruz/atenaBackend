import Order from '@modules/orders/infra/typeorm/entities/Order';
import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';

export default interface IOrderRepository {
    create(data: ICreateOrderDTO): Promise<Order>;
}
