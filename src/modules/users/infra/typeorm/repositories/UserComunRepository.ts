import { IUserComunRepository, IUserComunRepositoryDTO } from '@modules/users/repositories/IUserComunRepository';
import { getRepository, Repository } from 'typeorm';

import { UserComun } from '../entities/UserComun';

class UserComunRepository implements IUserComunRepository {
  private repository: Repository<UserComun>;
  constructor() {
    this.repository = getRepository(UserComun);
  }

  async create({
    name, cpf, telephone, email, fk_user,
  }: IUserComunRepositoryDTO): Promise<UserComun> {
    const filial = this.repository.create({
      name,
      cpf,
      telephone,
      email,
      fk_user,
    });
    const created = await this.repository.save(filial);
    return created;
  }
  async listAll(): Promise<UserComun[]> {
    const allFilals = await this.repository.find();
    return allFilals;
  }
  async listById(id: number): Promise<UserComun> {
    const findById = await this.repository.findOne({ id });
    return findById;
  }
  async listByName(name: string): Promise<UserComun> {
    const findByName = await this.repository.findOne({ name });
    return findByName;
  }
}

export { UserComunRepository };
