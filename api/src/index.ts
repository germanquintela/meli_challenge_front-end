import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import http from 'http';

import config from './config/config';
import items from './routes/items';

dotenv.config();
const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');

    return res.status(200).json({});
  }

  next();
});

app.use('/items', items);

app.use((req: Request, res: Response) => {
  return res.status(404).json({ status: 404, message: 'Hubo un problema al solicitar la busqueda' });
});

const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () => console.log(`Server is listening on port ${config.server.port}!`));
