import { Busine } from 'src/busines/entities/busine.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
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

  @ManyToMany(
    () => User,
    (user) => user.busines_offers, //optional
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinTable({
    name: 'user_businesOffers',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'businesoffers_id',
      referencedColumnName: 'id',
    },
  })
  user?: User[];
  length: number;
}
