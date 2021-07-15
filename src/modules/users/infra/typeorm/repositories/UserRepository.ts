import { IFilialRepository, IFilialRepositoryDTO } from '@modules/users/repositories/IFilialRepository';
import { IDataUpdateUser, IUserRepository, IUserRepositoryDTO } from '@modules/users/repositories/IUserReposytory';
import { compare } from 'bcrypt';
import { getRepository, Repository } from 'typeorm';

import { AppError } from '@shared/exceptions/AppError';

import { User } from '../entities/User';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = getRepository(User);
  }
  async create({
    login, password, registerDate, fk_type_user,
  }: IUserRepositoryDTO): Promise<User> {
    const user = this.repository.create({
      login,
      password,
      registerDate: new Date(),
      fk_type_user,
    });
    const created = await this.repository.save(user);
    return created;
  }
  async listAll(): Promise<User[]> {
    const listAll = await this.repository.find();
    return listAll;
  }
  async listById(id: number): Promise<User> {
    const listById = await this.repository.findOne({ id });
    return listById;
  }
  async listByLogin(login: string): Promise<User> {
    const listByLogin = await this.repository.findOne({ login });
    return listByLogin;
  }
  async authenticate(login: string, passwordRequest: string): Promise<User> {
    const authenticate = await this.repository.findOne({ login });
    if (!authenticate) throw new AppError('Ocorreu um erro ao fazer login, cheque as credenciais.');

    const { password } = authenticate;
    const passwordMatch = await compare(passwordRequest, password);
    if (!passwordMatch) throw new AppError('Ocorreu um erro ao fazer login, cheque as credenciais.');

    return authenticate;
  }
  async update({ id, login, password }: IDataUpdateUser): Promise<User> {
    const update = await this.repository.save({
      id, login, password,
    });
    return update;
  }
}

export { UserRepository };
