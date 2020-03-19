import User from '@models/user';
import { userSchema } from '@validations/user-validation';
import { NextFunction, Request, Response } from 'express';

class UserController {
  public async index(_: Request, res: Response): Promise<Response> {
    try {
      const users = await User.findAll({ attributes: ['name', 'email'] });
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json('Load users failed');
    }
  }

  public async store(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      await userSchema.validate(req.body);

      const { name, email } = await User.create(req.body);
      return res.json({ name, email });
    } catch (error) {
      return res.status(500).json('Conexão com o banco de dados foi recusada!');
    }
  }
}

export default new UserController();
