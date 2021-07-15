import { User } from '@modules/users/infra/typeorm/entities/User';
import { Request } from 'express';
import { container } from 'tsyringe';

import { AppError } from '@shared/exceptions/AppError';
import { AppSucess } from '@shared/exceptions/AppSucess';

import { CreateFilialUseCase } from './CreateFilialUseCase';

class CreateFilialController {
  async handle(request:Request): Promise<User> {
    const {
      id_typeuser,
      email,
      login,
      name,
      password,
      telephone,
      cnpj,
    } = request.body;

    if (!id_typeuser || !email || !login || !name || !password || !telephone || !cnpj) throw new AppError('Exeiste parametros obrigatorios a serem preenchidos');
    const typeUserCreateUseCase = container.resolve(CreateFilialUseCase);
    const result = await typeUserCreateUseCase.execute({
      id_typeuser,
      email,
      login,
      name,
      password,
      telephone,
      cnpj,
    });
    throw new AppSucess(result, 201);
  }
}

export { CreateFilialController };
