import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('typeUser')
class TypeUser {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nameType: string;
}

export { TypeUser };
