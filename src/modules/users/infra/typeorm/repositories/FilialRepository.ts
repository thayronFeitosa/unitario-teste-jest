import { IFilialRepository, IFilialRepositoryDTO } from '@modules/users/repositories/IFilialRepository';
import { getRepository, Repository } from 'typeorm';

import { Filial } from '../entities/Filial';

class FilialRepository implements IFilialRepository {
  private repository: Repository<Filial>;
  constructor() {
    this.repository = getRepository(Filial);
  }

  async create({
    name, cnpj, telephone, email, fk_user,
  }: IFilialRepositoryDTO): Promise<Filial> {
    const filial = this.repository.create({
      name,
      cnpj,
      telephone,
      email,
      fk_user,
    });
    const created = await this.repository.save(filial);
    return created;
  }
  async listAll(): Promise<Filial[]> {
    const allFilals = await this.repository.find();
    return allFilals;
  }
  async listById(id: number): Promise<Filial> {
    const findById = await this.repository.findOne({ id });
    return findById;
  }
  async listByName(name: string): Promise<Filial> {
    const findByName = await this.repository.findOne({ name });
    return findByName;
  }
}

export { FilialRepository };
