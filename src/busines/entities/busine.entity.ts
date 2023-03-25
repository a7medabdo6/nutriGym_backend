import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
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
}
