import { Filial } from '@modules/users/infra/typeorm/entities/Filial';

interface IFilialRepositoryDTO {
  id?: number;
  name: string;
  cnpj: string;
  telephone: string;
  email: string;
  fk_user: number
}

interface IFilialRepository {
  create({
    name,
    cnpj,
    telephone,
    email,
    fk_user,
  }:IFilialRepositoryDTO): Promise<Filial>;
  listAll(): Promise<Filial[]>;
  listById(id: number): Promise<Filial>;
  listByName(name: string): Promise<Filial>;
}

export { IFilialRepositoryDTO, IFilialRepository };
