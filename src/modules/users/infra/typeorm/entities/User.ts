import {
  Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn,
} from 'typeorm';

import { TypeUser } from './TypeUser';

@Entity('user')
class User {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  registerDate: Date ;

  @Column()
  tokenPassword: string;

  @Column()
  recoverPasswordToken: string;

  @Column()
  fk_type_user: number

  @OneToOne(() => TypeUser)
  @JoinColumn([
    { name: 'fk_type_user', referencedColumnName: 'id' },
  ])
  type_user: TypeUser
}

export { User };
