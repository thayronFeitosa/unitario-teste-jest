import { inject, injectable } from 'tsyringe';

import { ITypeUserRepository } from '../../repositories/ITypeUserRepository';

@injectable()
class TypeUserCreateUseCase {
  constructor(@inject('TypeUserRepository') private typeUserRepository: ITypeUserRepository) {}
  async execute(name: string) {
    const result = await this.typeUserRepository.create(name);
    return result;
  }
}

export { TypeUserCreateUseCase };
