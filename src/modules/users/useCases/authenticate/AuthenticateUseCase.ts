import { FilialRepository } from '@modules/users/infra/typeorm/repositories/FilialRepository';
import { MatrizRepository } from '@modules/users/infra/typeorm/repositories/MatrizRepository';
import { TypeUserRepository } from '@modules/users/infra/typeorm/repositories/TypeUserRepository';
import { UserComunRepository } from '@modules/users/infra/typeorm/repositories/UserComunRepository';
import { IUserRepository } from '@modules/users/repositories/IUserReposytory';
import { container, inject, injectable } from 'tsyringe';

import { AppError } from '@shared/exceptions/AppError';

@injectable()
class AuthenticateUseCase {
  private findTypeUser: TypeUserRepository;
  constructor(@inject('UserRepository') private userRepository: IUserRepository) {}

  async execute(user: string, passwordRequest: string): Promise<any> {
    const userLogin = await this.userRepository.authenticate(user, passwordRequest);

    if (!userLogin) throw new AppError('Erro ao realizar o login. Cheque as credenciais e tente novamente');

    const { fk_type_user, id } = userLogin;

    const findTypeUser = container.resolve(TypeUserRepository);
    const { nameType: typeUser } = await findTypeUser.listById(fk_type_user);

    if (!typeUser) throw new AppError('Usuário não autorizado');

    if (typeUser === 'Filial') {
      const findUFilialRepository = container.resolve(FilialRepository);
      const filial = await findUFilialRepository.listById(id);

      const result = {
        user: filial,
        login: userLogin.login,

      };
      return result;
    }

    if (typeUser === 'matriz') {
      const findMatrizRepository = container.resolve(MatrizRepository);
      const matriz = await findMatrizRepository.listById(id);

      const result = {
        user: matriz,
        login: userLogin.login,
      };
      return result;
    }

    if (typeUser === 'Usuário Padão') {
      const findUserComunRepository = container.resolve(UserComunRepository);
      const userComun = await findUserComunRepository.listById(id);

      const result = {
        user: userComun,
        login: userLogin.login,
      };
      return result;
    }

    return 'userLogin';
  }
}

export { AuthenticateUseCase };
