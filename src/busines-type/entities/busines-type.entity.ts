import { Busine } from 'src/busines/entities/busine.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class BusinesType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cover: string;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column()
  extra: string;
  @OneToMany(() => Busine, (busine) => busine.busines_type) // specify inverse side as a second parameter
  busines: Busine;
}
