import { BusinesType } from 'src/busines-type/entities/busines-type.entity';
import { BusinessOffer } from 'src/business_offers/entities/business_offer.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Busine {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  logo: string;
  @Column()
  name: string;
  @Column()
  type: string;

  @ManyToMany(
    () => User,
    (user) => user.busines, //optional
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinTable({
    name: 'user_busines',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'busines_id',
      referencedColumnName: 'id',
    },
  })
  user?: User[];

  @ManyToOne(() => BusinesType, (BusinesType) => BusinesType.busines) // specify inverse side as a second parameter
  @JoinColumn()
  busines_type: BusinesType;

  @OneToMany(() => BusinessOffer, (BusinessOffer) => BusinessOffer.busines) // specify inverse side as a second parameter
  busines_offers: BusinessOffer;
}
