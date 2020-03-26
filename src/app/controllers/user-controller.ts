import HttpException from '@app/errors/exception';
import User from '@models/user';
import { userStoreSchema } from '@validations/user-validation';
import { NextFunction, Request, Response } from 'express';

class UserController {
  public async index(
    _: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const users = await User.findAll({ attributes: ['name', 'email'] });
      return res.status(200).json(users);
    } catch (error) {
      next(new HttpException(400, 'Load users failed', error));
    }
  }

  public async store(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      await userStoreSchema.validate(req.body);

      const { name, email } = await User.create(req.body);
      return res.json({ name, email });
    } catch (error) {
      next(new HttpException(400, 'Store users failed!', error));
    }
  }
}

export default new UserController();
