import * as express from "express";
import * as compression from "compression";
import * as helmet from "helmet";
import * as bodyParser from "body-parser";

import locals from "./locals";
import routes from "./routes";
import exceptionHandler from "../exception/handler";

class Express {
  /**
   * Create the express object
   */
  public express: express.Application;

  /**
   * Initializes the express server
   */
  constructor() {
    this.express = express();

    this.mountDotEnv();
    this.mountMiddlewares();
    this.mountRoutes();
  }

  private mountDotEnv(): void {
    this.express = locals.init(this.express);
  }

  /**
   * Mounts all the defined middlewares
   */
  private mountMiddlewares(): void {
    this.express.use(compression());
    this.express.use(helmet());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
  }

  /**
   * Mounts all the defined routes
   */
  private mountRoutes(): void {
    this.express = routes.mountApi(this.express);
  }

  /**
   * Starts the express server
   */
  public init(): any {
    const port: number = locals.config().port;

    // Registering Exception / Error Handlers
    this.express.use(exceptionHandler.logErrors);
    this.express.use(exceptionHandler.errorHandler);
    this.express = exceptionHandler.notFoundHandler(this.express);

    // Start the server on the specified port
    this.express.listen(port, () => {
      console.log(
        "\x1b[33m%s\x1b[0m",
        `Server :: Running @ 'http://localhost:${port}'`
      );
    });
  }
}

/** Export the express module */
export default new Express();
