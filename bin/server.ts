import debug from 'debug';
import errorHandler from 'errorhandler';
import http from 'http';
import notifier from 'node-notifier';

import 'dotenv/config';
import app from './../src/app';

const { NODE_ENV, PORT } = process.env;

const normalizePort = (val: string): number | string | boolean => {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

const errorNotification = (
  _: Error,
  str: string,
  req: { method: string; url: string }
): void => {
  const title = `Error in ${req.method} ${req.url}`;

  notifier.notify({
    title: title,
    message: str,
  });
};

const port = normalizePort(PORT || '3000');
app.set('port', port);
const server = http.createServer(app);

const onListening = (): void => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `Pipe ${addr}` : `Port ${addr?.port}`;
  debug(`Listening on ${bind}`);
};

if (NODE_ENV === 'development') {
  app.use(errorHandler({ log: errorNotification }));
}

app.listen(port);
app.on('listening', onListening);
console.log(`Server running on port ${port}`);
