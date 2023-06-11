import 'zone.js/node';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import bootstrap from './src/main.server';

export function app(): express.Express {
  const server = express();
  server.engine('html', ngExpressEngine({ bootstrap }));
  return server;
}
