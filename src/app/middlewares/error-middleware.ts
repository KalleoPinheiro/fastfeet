import { Request, Response, NextFunction } from 'express';
import ErrorHanddler from '@errors/exception';

const ErrorMiddleware = (
  error: ErrorHanddler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  return res.status(status).json({
    status,
    message,
  });
};

export default ErrorMiddleware;
