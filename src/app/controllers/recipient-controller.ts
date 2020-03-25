import Recipients from '@app/models/recipient';
import { recipientSchema } from '@validations/recipients-validation';
import { NextFunction, Request, Response } from 'express';
import HttpException from '@app/errors/exception';

class RecipientController {
  public async index(
    _: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const recipients = await Recipients.findAll({
        attributes: ['name', 'street', 'number', 'state', 'zip_code'],
      });
      return res.status(200).json(recipients);
    } catch (error) {
      next(new HttpException(500, 'Get recipients failed', error));
    }
  }

  public async store(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      await recipientSchema.validate(req.body);

      const {
        name,
        street,
        number,
        city,
        state,
        country,
        zip_code,
      } = await Recipients.create(req.body);
      return res.json({ name, street, number, city, state, country, zip_code });
    } catch (error) {
      next(new HttpException(500, 'Store recipient failed', error));
    }
  }
}

export default new RecipientController();
