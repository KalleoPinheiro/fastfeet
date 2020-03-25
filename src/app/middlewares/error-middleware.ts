import Exception from '@errors/exception';
import logger from '@logs/logger';
import { Request, Response, NextFunction } from 'express';

const ErrorMiddleware = (
  error: Exception,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.status || 500;
  const message = error.message || 'Failed!';
  const detail = error.detail || 'Something went wrong';
  logger.error(
    error.detail ? `${error.message} - ${error.detail}` : `${error.message}`
  );
  return res.status(status).json({ status, message, detail });
};

export default ErrorMiddleware;
