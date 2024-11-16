import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventName: string;

  @Column('datetime')
  eventDate: Date;

  @Column()
  guestName: string;

  @Column()
  guestEmail: string;

  @Column('int')
  guestCount: number;

  @Column()
  specialRequests: string;
}
