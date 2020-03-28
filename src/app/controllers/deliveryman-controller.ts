import HttpException from '@app/errors/exception';
import Deliveryman from '@app/models/deliveryman';
import { deliverymanStoreSchema } from '@app/validations/deliveryman-validation';
import { NextFunction, Request, Response } from 'express';
import File from '@app/models/file';

class DeliverymanController {
  public async index(
    _: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const couriers = await Deliveryman.findAll({
        attributes: ['id', 'name', 'email'],
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['id', 'name', 'path'],
            all: true,
          },
        ],
      });
      return res.status(200).json(couriers);
    } catch (error) {
      next(new HttpException(400, 'Load couriers failed', error));
    }
  }

  public async store(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      await deliverymanStoreSchema.validate(req.body);

      const { name, email } = await Deliveryman.create(req.body);
      return res.json({ name, email });
    } catch (error) {
      next(new HttpException(400, 'Store courier failed!', error));
    }
  }
}

export default new DeliverymanController();
