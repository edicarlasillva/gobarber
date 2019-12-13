// Importar o express
const express = require('express');
const routes = require('./routes');

class App {
  // Método chamado automaticamente quando a classe app for instanciada
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json);
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;