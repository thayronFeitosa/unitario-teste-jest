import { AuthenticateController } from '@modules/users/useCases/authenticate/AuthenticateController';
import { CreateFilialController } from '@modules/users/useCases/user/createFilial/CreateFilialController';
import { CreateMatrizController } from '@modules/users/useCases/user/createMatriz/CreateMatrizController';
import { CreateUserComumControllet } from '@modules/users/useCases/user/createUserComum/CreateUserComumControllet';
import { Router } from 'express';

const createFilialController = new CreateFilialController();
const createMatrizController = new CreateMatrizController();
const createUserComumControllet = new CreateUserComumControllet();
const authenticateController = new AuthenticateController();
const userRouter = Router();

userRouter.post('/user/filial/create', createFilialController.handle);
userRouter.post('/user/matriz/create', createMatrizController.handle);
userRouter.post('/authenticate', authenticateController.handle);

export { userRouter };
