import { Request, Response } from 'express';

// import User from '@app/models/user';

// import Logger from '@logs/logger';

import Logger from '../../tools/logging/logger';
import User from '../models/user';

class HomeController {
  public async index(_: Request, res: Response): Promise<Response> {
    return res.sendStatus(204);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      User.create(req.body);
      return res.json();
    } catch (error) {
      Logger.error(error);
      return res.status(400).json('Failed to create user');
    }
  }
}

export default new HomeController();
