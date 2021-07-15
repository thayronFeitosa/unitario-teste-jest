import { UserReposytoryInMemory } from '@modules/users/repositories/in-memory/UserReposytoryInMemory';

import { AuthenticateUseCase } from './AuthenticateUseCase';

let userReposytoryInMemory: UserReposytoryInMemory;
let authenticateUseCase: AuthenticateUseCase;

describe('authenticate', () => {
  beforeEach(() => {
    userReposytoryInMemory = new UserReposytoryInMemory();
    authenticateUseCase = new AuthenticateUseCase(userReposytoryInMemory);
  });

  it('should be able to create a new user', async () => {
    const user = {
      login: 'thayron',
      password: '123456789',
      fk_type_user: 1,
    };

    const userCreate = await userReposytoryInMemory.create(user);
    expect(userCreate).toHaveProperty('login');
  });

  it('should be able to authenticate with login and password', async () => {
    const user = {
      login: 'thayron',
      password: '123456789',
      fk_type_user: 1,
    };

    await userReposytoryInMemory.create(user);
    await authenticateUseCase.execute('thayron', '123456789');

    expect(2).toBe(2);
  });
});
