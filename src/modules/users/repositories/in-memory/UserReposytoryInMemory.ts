import { compare, hash } from 'bcrypt';

import { AppError } from '@shared/exceptions/AppError';

import { User } from '../../infra/typeorm/entities/User';
import { IDataUpdateUser, IUserRepository, IUserRepositoryDTO } from '../IUserReposytory';

interface IResponseAllUsers {
  users: Array<any>,
  size: number
}

class UserReposytoryInMemory implements IUserRepository {
  user: User [] = [];

  async create({
    login, password, registerDate, fk_type_user, id,
  }: IUserRepositoryDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      login,
      password: await hash(password, 10),
      registerDate,
      fk_type_user,
      id,
    });
    this.user.push(user);

    return user;
  }
  async listAll(): Promise<User[]> {
    const listAllUser = this.user;
    return listAllUser;
  }
  async listById(id: number): Promise<User> {
    const user = this.user.find((user) => user.id === id);

    return user;
  }
  async listByLogin(login: string): Promise<User> {
    const user = this.user.find((user) => user.login === login);
    return user;
  }
  async authenticate(login: string, passwordRequest: string): Promise<User> {
    const isUser = this.user.find((user) => user.login === login);

    if (!isUser) throw new AppError('Ocorreu um erro ao fazer login, cheque as credenciais.');
    const { password, id } = isUser;

    const passwordMatch = await compare(passwordRequest, password);

    if (!passwordMatch) throw new AppError('Ocorreu um erro ao fazer login, cheque as credenciais.');

    return isUser;
  }
  listAllUsersRestrictData(page: number, name: string): Promise<IResponseAllUsers> {
    throw new Error('Method not implemented.');
  }
  update({ id, login, password }: IDataUpdateUser): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

export { UserReposytoryInMemory };
