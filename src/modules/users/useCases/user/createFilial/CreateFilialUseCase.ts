import { User } from '@modules/users/infra/typeorm/entities/User';
import { FilialRepository } from '@modules/users/infra/typeorm/repositories/FilialRepository';
import { IUserRepository } from '@modules/users/repositories/IUserReposytory';
import { hash } from 'bcrypt';
import { container, inject, injectable } from 'tsyringe';

import { AppError } from '@shared/exceptions/AppError';

import { ICreateUser } from '../IRequest';

@injectable()
class CreateFilialUseCase {
  constructor(@inject('UserRepository') private userRepository: IUserRepository) {}
  async execute({
    id_typeuser,
    login,
    password,
    name,
    cnpj,
    telephone,
    email,
  }:ICreateUser): Promise<User> {
    const isUser = await this.userRepository.listByLogin(login);
    const filialRepository = container.resolve(FilialRepository);

    if (isUser) throw new AppError('Esté login está sendo utilizado para outro usuário ');

    const isFilial = await filialRepository.listByName(name);
    if (isFilial) throw new AppError('Esté nome ja está sendo está sendo utilizado para outro usuário ');

    const user = await this.userRepository.create({
      fk_type_user: id_typeuser,
      login,
      password: await hash(password, 10),
    });

    await filialRepository.create({
      fk_user: user.id,
      name,
      cnpj,
      telephone,
      email,
    });

    return user;
  }
}

export { CreateFilialUseCase };
