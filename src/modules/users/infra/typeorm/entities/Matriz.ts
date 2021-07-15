import {
  Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from './User';

@Entity('matriz')
class Matriz {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  telephone: string ;

  @Column()
  email: string;

  @Column()
  fk_user: number

  @OneToOne(() => User)
  @JoinColumn([
    { name: 'fk_user', referencedColumnName: 'id' },
  ])
  user: User
}

export { Matriz };
