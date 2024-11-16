import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ordering {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  liquorType: string;

  @Column()
  quantity: number;

  @Column({ default: 0 })
  stockLevel: number;

  @Column()
  reorderThreshold: number;

  @Column({ nullable: true })
  supplierContact: string;

  @Column({ nullable: true })
  eventServed: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  orderDate: Date;
}
