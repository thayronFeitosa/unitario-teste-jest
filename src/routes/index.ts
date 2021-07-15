import { Router, Request, Response } from 'express';

import { userRouter } from './user.routes';

const routes = Router();

routes.use('/api', userRouter);

export { routes };
