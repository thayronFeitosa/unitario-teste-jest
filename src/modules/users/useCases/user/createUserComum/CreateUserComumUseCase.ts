import { User } from '@modules/users/infra/typeorm/entities/User';
import { UserComunRepository } from '@modules/users/infra/typeorm/repositories/UserComunRepository';
import { IUserRepository } from '@modules/users/repositories/IUserReposytory';
import { hash } from 'bcrypt';
import { container, inject, injectable } from 'tsyringe';

import { AppError } from '@shared/exceptions/AppError';

import { ICreateUser } from '../IRequest';

@injectable()
class CreateMatrizUseCase {
  constructor(@inject('UserRepository') private userRepository: IUserRepository) {}
  async execute({
    id_typeuser,
    login,
    password,
    name,
    cpf,
    telephone,
    email,
  }:ICreateUser): Promise<User> {
    const isUser = await this.userRepository.listByLogin(login);
    const userComunRepository = container.resolve(UserComunRepository);
    if (isUser) throw new AppError('Esté login está sendo utilizado para outro usuário ');

    const isUserComun = await userComunRepository.listByName(name);
    if (isUserComun) throw new AppError('Esté nome ja está sendo está sendo utilizado para outro usuário ');

    const user = await this.userRepository.create({
      fk_type_user: id_typeuser,
      login,
      password: await hash(password, 10),

    });
    await userComunRepository.create({
      fk_user: user.id,
      name,
      cpf,
      telephone,
      email,
    });

    return user;
  }
}

export { CreateMatrizUseCase };
