import { Request } from 'express';
import { container } from 'tsyringe';

import { AppSucess } from '@shared/exceptions/AppSucess';

import { TypeUserCreateUseCase } from './TypeUserCreateUseCase';

class TypeUserCreateController {
  async handle(request:Request) {
    const { name } = request.body;
    const typeUserCreateUseCase = container.resolve(TypeUserCreateUseCase);
    const result = await typeUserCreateUseCase.execute(name);
    throw new AppSucess(result, 201);
  }
}

export { TypeUserCreateController };
