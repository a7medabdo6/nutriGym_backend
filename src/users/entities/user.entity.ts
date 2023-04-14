import { Busine } from 'src/busines/entities/busine.entity';
import { BusinessOffer } from 'src/business_offers/entities/business_offer.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum UserRole {
  superadmin = 'superadmin',
  user = 'user',
  admin = 'admin',
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column({ default: 'test' })
  phone: string;
  @Column({ default: 'test' })
  photo: string;

  @Column()
  password: string;

  @Column({ default: 0 })
  offerId: number;

  @Column()
  username: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.superadmin,
  })
  role: UserRole;

  @ManyToMany(() => Busine, (Busine) => Busine.user, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  busines?: Busine[];

  @ManyToMany(() => BusinessOffer, (BusinessOffer) => BusinessOffer.user, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  busines_offers?: BusinessOffer[];

  // @Column({
  //   default: false,
  // })
  // active: boolean;

  // @ManyToMany(() => Flight, (flight) => flight.user, {
  //   onDelete: 'NO ACTION',
  //   onUpdate: 'NO ACTION',
  // })
  // flight?: Flight[];
  // @ManyToMany(() => Country, (country) => country.user, {
  //   onDelete: 'NO ACTION',
  //   onUpdate: 'NO ACTION',
  // })
  // country?: Country[];

  // @OneToMany(() => Docs, (Docs) => Docs.user) // specify inverse side as a second parameter
  // @JoinColumn()
  // Docs: Docs;
}
