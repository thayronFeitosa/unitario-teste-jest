import { TypeUser } from '@modules/users/infra/typeorm/entities/TypeUser';

interface ITypeUserRepositoryDTO {
  id?: number;
  nameType: string;
}

interface ITypeUserRepository {
  create(nameType: string): Promise<TypeUser>;
  listAll(): Promise<TypeUser[]>;
  listById(id: number): Promise<TypeUser>;
  listByName(nameType: string): Promise<TypeUser>;
}

export { ITypeUserRepositoryDTO, ITypeUserRepository };
