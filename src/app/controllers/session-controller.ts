import User from '@app/models/user';
import { sessionSchema } from '@validations/session-validation';
import { NextFunction, Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import authConfig from '@configs/auth';
import HttpException from '@app/errors/exception';
import { IUser } from '@utils/interfaces/user';

class SessionController {
  public async store(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      if (!(await sessionSchema.isValid(req.body))) {
        return res.status(400).json({ error: 'Validation fail' });
      }

      const { email, password } = req.body;

      const user: IUser | null = await User.findOne({ where: { email } });

      if (!user) {
        throw new HttpException(401, 'User not found!');
      }

      if (!(await compare(password, user.password_hash))) {
        throw new HttpException(401, 'Password does not match!');
      }

      const { id, name, admin } = user;

      return res.json({
        user: {
          id,
          name,
          email,
          admin,
        },
        token: sign({ id, admin }, `${authConfig.secret}`, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (error) {
      next(
        new HttpException(
          error.status || 500,
          error.message || 'Session failed',
          error
        )
      );
    }
  }
}

export default new SessionController();
