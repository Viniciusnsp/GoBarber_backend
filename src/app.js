import express from 'express';
import routes from './routes';
import path from 'path';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Passando um middleware que faz com que a aplicação possa enviar e receber arquivos JSON
    this.server.use(express.json());
    this.server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))
  }

  routes() {
    // Importando e passando todas as rotas pelo middleware global
    this.server.use(routes);
  }
}

export default new App().server;
