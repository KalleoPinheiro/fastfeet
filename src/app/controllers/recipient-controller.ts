import HttpException from '@app/errors/exception';
import Recipients from '@app/models/recipient';
import {
  recipientStoreSchema,
  recipientUpdateSchema,
} from '@validations/recipients-validation';
import { NextFunction, Request, Response } from 'express';

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
      await recipientStoreSchema.validate(req.body);

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

  public async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const { id } = req.params;

      if (!id) {
        throw new HttpException(
          400,
          'Recipient id is required on route param!'
        );
      }

      const recipient = await Recipients.findByPk(id);

      if (!recipient) {
        throw new HttpException(400, 'Recipient not found!');
      }

      await recipientUpdateSchema.validate(req.body);

      const {
        name,
        street,
        number,
        city,
        state,
        country,
        zip_code,
      } = await recipient.update(req.body);
      return res.json({ name, street, number, city, state, country, zip_code });
    } catch (error) {
      next(new HttpException(500, 'Store recipient failed', error));
    }
  }

  public async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const { id } = req.params;

      if (!id) {
        throw new HttpException(
          400,
          'Recipient id is required on route param!'
        );
      }

      const recipient = await Recipients.findByPk(id);

      if (!recipient) {
        throw new HttpException(400, 'Recipient not found!');
      }

      await recipient.destroy();

      return res.status(200).json({ message: 'Recipient deleted!' });
    } catch (error) {
      next(
        new HttpException(
          error?.status || 500,
          'Delete recipient failed',
          error
        )
      );
    }
  }
}

export default new RecipientController();
