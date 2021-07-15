import { UserComun } from '@modules/users/infra/typeorm/entities/UserComun';

interface IUserComunRepositoryDTO {
  id?: number;
  name: string;
  cpf: string;
  telephone: string;
  email: string;
  fk_user: number
}

interface IUserComunRepository {
  create({
    name,
    cpf,
    telephone,
    email,
    fk_user,
  }:IUserComunRepositoryDTO): Promise<UserComun>;
  listAll(): Promise<UserComun[]>;
  listById(id: number): Promise<UserComun>;
  listByName(name: string): Promise<UserComun>;
}

export { IUserComunRepositoryDTO, IUserComunRepository };
