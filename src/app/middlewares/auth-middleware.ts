import authConfig from '@configs/auth';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { promisify } from 'util';
import HttpException from '@app/errors/exception';

const AuthMiddleware = async (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new HttpException(401, 'Token not provided!');
    }

    const [, token] = authHeader.split(' ');

    try {
      const decoded: any = await promisify(verify)(
        token,
        `${authConfig.secret}`
      );
      req.userId = decoded?.id;

      return next();
    } catch (error) {
      throw new HttpException(401, 'Invalid token!', error);
    }
  } catch (error) {
    next(error);
  }
};

export default AuthMiddleware;
