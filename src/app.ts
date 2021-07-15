import express, { NextFunction, Request, Response } from 'express';
import '@shared/container';

import 'express-async-errors';
import 'reflect-metadata';
import './shared/infra/database';

import { routes } from './routes';
import { AppError } from './shared/exceptions/AppError';
import { AppSucess } from './shared/exceptions/AppSucess';

const app = express();
app.use(express.json());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        error: err.message,
      });
    }

    if (err instanceof AppSucess) {
      return response.status(err.statusCode).json({
        sucess: err.message,
      });
    }
    return response.status(500).json({
      error: `Internal server error ${err}`,
    });
  },
);

export { app };
