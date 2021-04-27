import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import User from '@modules/users/infra/typeorm/entities/User';

@Entity('orders')
export default class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    unimedID: string;

    @Column()
    serviceNumber: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    doctor_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'doctor_id' })
    doctor: User;
}
