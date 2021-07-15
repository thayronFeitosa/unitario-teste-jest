import { Request } from 'express';
import { container } from 'tsyringe';

import { AppError } from '@shared/exceptions/AppError';
import { AppSucess } from '@shared/exceptions/AppSucess';

import { AuthenticateUseCase } from './AuthenticateUseCase';

class AuthenticateController {
  async handle(request: Request): Promise<any> {
    const { login, password } = request.body;
    if (!login || !password) throw new AppError('Usuário e senha são obrigatorios!');

    const authenticateUseCase = container.resolve(AuthenticateUseCase);
    const loginUser = await authenticateUseCase.execute(login, password);

    throw new AppSucess(loginUser, 201);
  }
}

export { AuthenticateController };
