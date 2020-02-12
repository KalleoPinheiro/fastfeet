import { Request, Response } from 'express';

import User from '@models/user';

import Logger from '@logs/logger';

class HomeController {
  public async index(_: Request, res: Response): Promise<Response> {
    return res.sendStatus(204);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (error) {
      Logger.error(error);
      console.log(error);
      return res.status(400).json('Failed to create user');
    }
  }
}

export default new HomeController();
