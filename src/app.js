// Importar o express
import express from "express";
import routes from "./routes";

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

export default new App().server;
