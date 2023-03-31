import { Busine } from 'src/busines/entities/busine.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class BusinessOffer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  duration: string;

  @Column()
  desc: string;

  @Column()
  photo: string;

  @Column()
  extra: string;

  @ManyToOne(() => Busine, (Busine) => Busine.busines_offers) // specify inverse side as a second parameter
  @JoinColumn()
  busines: Busine;
}
