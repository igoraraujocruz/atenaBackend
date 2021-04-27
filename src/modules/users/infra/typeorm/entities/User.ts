import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Order from '@modules/orders/infra/typeorm/entities/Order';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    role: string;

    @OneToMany(() => Order, order => order.doctor)
    orders: Order[];

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}

export default User;
