import HttpException from '@app/errors/exception';
import File from '@app/models/file';
import { NextFunction, Request, Response } from 'express';

class FileController {
  async store(
    req: Request | { file: any },
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const { originalname: name, filename: path } = req.file;
      const file = await File.create({
        name,
        path: `${process.env.APP_URL}/files/${path}`,
      });
      return res.status(200).json(file);
    } catch (error) {
      next(new HttpException(400, 'File store failed', error));
    }
  }
}

export default new FileController();
