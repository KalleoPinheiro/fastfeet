import { Request, Response } from 'express';
import appConfig from '@configs/app';

class IndexController {
  public async index(_: Request, res: Response): Promise<Response> {
    return res
      .send(200)
      .json({ title: 'Welcome to Fastfeet', version: appConfig.appVersion });
  }
}

export default new IndexController();
