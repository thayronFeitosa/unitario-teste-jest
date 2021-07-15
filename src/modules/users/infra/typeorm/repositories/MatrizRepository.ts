import { IMatrizRepository, IMatrizRepositoryDTO } from '@modules/users/repositories/IMatrizRepository';
import { getRepository, Repository } from 'typeorm';

import { Matriz } from '../entities/Matriz';

class MatrizRepository implements IMatrizRepository {
  private repository: Repository<Matriz>;
  constructor() {
    this.repository = getRepository(Matriz);
  }

  async create({
    name, cnpj, telephone, email, fk_user,
  }: IMatrizRepositoryDTO): Promise<Matriz> {
    const matriz = this.repository.create({
      name,
      cnpj,
      telephone,
      email,
      fk_user,
    });
    const created = await this.repository.save(matriz);
    return created;
  }
  async listAll(): Promise<Matriz[]> {
    const allFilals = await this.repository.find();
    return allFilals;
  }
  async listById(id: number): Promise<Matriz> {
    const findById = await this.repository.findOne({ id });
    return findById;
  }
  async listByName(name: string): Promise<Matriz> {
    const findByName = await this.repository.findOne({ name });
    return findByName;
  }
}

export { MatrizRepository };
