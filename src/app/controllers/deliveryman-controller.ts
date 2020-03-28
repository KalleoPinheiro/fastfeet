import HttpException from '@app/errors/exception';
import Deliveryman from '@app/models/deliveryman';
import {
  deliverymanStoreSchema,
  deliverymanUpdateSchema,
} from '@app/validations/deliveryman-validation';
import { NextFunction, Request, Response } from 'express';
import File from '@app/models/file';
import { IDeliverers } from '@utils/interfaces/deliveryman';

class DeliverymanController {
  public async index(
    _: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const deliverers = await Deliveryman.findAll({
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
      return res.status(200).json(deliverers);
    } catch (error) {
      next(new HttpException(400, 'Load deliverers data failed', error));
    }
  }

  public async store(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      if (!req.isAdmin) {
        throw new HttpException(
          401,
          'Delivery registration allowed only for administrators'
        );
      }

      await deliverymanStoreSchema.validate(req.body);

      const { name, email } = await Deliveryman.create(req.body);
      return res.json({ name, email });
    } catch (error) {
      next(
        new HttpException(
          error?.status || 400,
          error?.message || 'Store deliveryman data failed!',
          error
        )
      );
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
        throw new HttpException(400, 'Deliveryman id requested in route param');
      }

      if (!req.isAdmin) {
        throw new HttpException(
          401,
          'Deliverers update allowed only for administrators'
        );
      }

      await deliverymanUpdateSchema.validate(req.body);

      const deliveryman: IDeliverers | null = await Deliveryman.findByPk(id);

      if (!deliveryman) {
        throw new HttpException(400, 'Deliveryman not found!');
      }

      const { name } = await deliveryman.update(req.body);
      return res
        .status(200)
        .json({ message: `Deliveryman ${name} was updated!` });
    } catch (error) {
      next(
        new HttpException(
          error?.status || 400,
          error?.message || 'Update deliveryman data failed!',
          error
        )
      );
    }
  }

  public async remove(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const { id } = req.params;

      if (!id) {
        throw new HttpException(400, 'Deliveryman id requested in route param');
      }

      if (!req.isAdmin) {
        throw new HttpException(
          401,
          'Deliverers remove allowed only for administrators'
        );
      }

      const deliveryman: IDeliverers | null = await Deliveryman.findByPk(id);

      if (!deliveryman) {
        throw new HttpException(400, 'Deliveryman not found!');
      }

      await deliveryman.destroy();
      return res.status(200).json({ message: `Deliveryman was removed!` });
    } catch (error) {
      next(
        new HttpException(
          error?.status || 400,
          error?.message || 'Delete deliveryman data failed!',
          error
        )
      );
    }
  }
}

export default new DeliverymanController();
