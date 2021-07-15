import { User } from '@modules/users/infra/typeorm/entities/User';

interface IUserRepositoryDTO {
  id?: number;
  login: string;
  password: string;
  registerDate?: Date;
  tokenPassword?: string;
  recoverPasswordToken?: string;
  fk_type_user: number;
}

interface IDataUpdateUser {
  id: number,
  login: string,
  password: string
}

interface IUserRepository {
  create({
    login, password, registerDate,
    fk_type_user,
  }:IUserRepositoryDTO): Promise<User>;
  listAll(): Promise<User[]>;
  listById(id: number): Promise<User>;
  listByLogin(login: string): Promise<User>;
  authenticate(login: string, password: string): Promise<User>
  update({ id, login, password }:IDataUpdateUser): Promise<User>

}

export { IUserRepositoryDTO, IUserRepository, IDataUpdateUser };
