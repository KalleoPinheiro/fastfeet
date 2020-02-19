import {
  format,
  transports,
  createLogger,
  LoggerOptions,
  Logger as ILogger,
} from 'winston';

class Logger {
  public logger: ILogger;
  private loggerOptions: LoggerOptions;

  constructor() {
    const { combine, timestamp, json } = format;

    this.loggerOptions = {
      level: 'info',
      format: combine(
        timestamp({
          format: 'DD-MM-YYYY HH:mm:ss',
        }),
        json()
      ),
      defaultMeta: { service: 'user-service' },
      transports: [
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/combined.log' }),
      ],
      exceptionHandlers: [
        new transports.File({ filename: 'logs/exceptions.log' }),
      ],
    };

    this.logger = createLogger(this.loggerOptions);

    if (process.env.NODE_ENV !== 'production') {
      this.logger.add(
        new transports.Console({
          format: combine(
            timestamp({
              format: 'DD-MM-YYYY HH:mm:ss',
            }),
            json()
          ),
        })
      );
    }
  }
}

export default new Logger().logger;
