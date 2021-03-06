import 'dotenv/config';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import ErrorMiddleware from '@middlewares/error-middleware';

import routes from './routes';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.errorsHandle();
  }

  private middlewares(): void {
    this.express.use(express.json({ limit: '300kb' }));
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(compression());
  }

  private routes(): void {
    this.express.use(routes);
  }

  private errorsHandle(): void {
    this.express.use(ErrorMiddleware);
  }
}

export default new App().express;
