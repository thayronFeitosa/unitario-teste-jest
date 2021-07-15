import { FilialRepository } from '@modules/users/infra/typeorm/repositories/FilialRepository';
import { MatrizRepository } from '@modules/users/infra/typeorm/repositories/MatrizRepository';
import { TypeUserRepository } from '@modules/users/infra/typeorm/repositories/TypeUserRepository';
import { UserComunRepository } from '@modules/users/infra/typeorm/repositories/UserComunRepository';
import { UserRepository } from '@modules/users/infra/typeorm/repositories/UserRepository';
import { IFilialRepository } from '@modules/users/repositories/IFilialRepository';
import { IMatrizRepository } from '@modules/users/repositories/IMatrizRepository';
import { ITypeUserRepository } from '@modules/users/repositories/ITypeUserRepository';
import { IUserComunRepository } from '@modules/users/repositories/IUserComunRepository';
import { IUserRepository } from '@modules/users/repositories/IUserReposytory';
import { container } from 'tsyringe';

container.registerSingleton<ITypeUserRepository>('TypeUserRepository', TypeUserRepository);
container.registerSingleton<IFilialRepository>('FilialRepository', FilialRepository);
container.registerSingleton<IUserComunRepository>('UserComunRepository', UserComunRepository);
container.registerSingleton<IMatrizRepository>('MatrizRepository', MatrizRepository);
container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
