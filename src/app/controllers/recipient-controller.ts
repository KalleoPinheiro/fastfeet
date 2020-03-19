import Recipients from '@app/models/recipient';
import { recipientSchema } from '@validations/recipients-validation';
import { NextFunction, Request, Response } from 'express';

class RecipientController {
  public async index(_: Request, res: Response): Promise<Response> {
    try {
      const recipients = await Recipients.findAll({
        attributes: ['name', 'street', 'number', 'state', 'zip_code'],
      });
      return res.status(200).json(recipients);
    } catch (error) {
      return res.status(400).json('Load recipients failed');
    }
  }

  public async store(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
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
      return res.status(500).json('Store recipient failed');
    }
  }
}

export default new RecipientController();
