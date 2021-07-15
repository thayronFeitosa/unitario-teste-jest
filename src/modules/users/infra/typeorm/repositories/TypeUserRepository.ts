import { ITypeUserRepository } from '@modules/users/repositories/ITypeUserRepository';
import { getRepository, Repository } from 'typeorm';

import { TypeUser } from '../entities/TypeUser';

class TypeUserRepository implements ITypeUserRepository {
  private repository: Repository<TypeUser>;
  constructor() {
    this.repository = getRepository(TypeUser);
  }
  async create(nameType: string): Promise<TypeUser> {
    const typeUser = this.repository.create({
      nameType,
    });
    const create = await this.repository.save(typeUser);
    return create;
  }
  async listAll(): Promise<TypeUser[]> {
    const listAll = await this.repository.find();
    return listAll;
  }
  async listById(id: number): Promise<TypeUser> {
    const listById = await this.repository.findOne({ id });
    return listById;
  }
  async listByName(nameType: string): Promise<TypeUser> {
    const listByName = await this.repository.findOne({ nameType });
    return listByName;
  }
}

export { TypeUserRepository };
