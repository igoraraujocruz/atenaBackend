import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateOrderService from '@modules/orders/services/CreateOrderService';

export default class OrdersController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name, unimedID, serviceNumber } = request.body;
        const createOrder = container.resolve(CreateOrderService);
        const order = await createOrder.execute({
            name,
            unimedID,
            serviceNumber,
            doctor_id: request.user.id,
        });

        return response.json(order);
    }
}
