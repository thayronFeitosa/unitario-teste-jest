import { Matriz } from '@modules/users/infra/typeorm/entities/Matriz';

interface IMatrizRepositoryDTO {
  id?: number;
  name: string;
  cnpj: string;
  telephone: string;
  email: string;
  fk_user: number
}

interface IMatrizRepository {
  create({
    name,
    cnpj,
    telephone,
    email,
    fk_user,
  }:IMatrizRepositoryDTO): Promise<Matriz>;
  listAll(): Promise<Matriz[]>;
  listById(id: number): Promise<Matriz>;
  listByName(name: string): Promise<Matriz>;
}

export { IMatrizRepositoryDTO, IMatrizRepository };
