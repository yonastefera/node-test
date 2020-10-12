import { Application } from "express";
import log from "../middlewares/log";

import apiRouter from "./../routes/api";

class Routes {
  public mountApi(_express: Application): Application {
    log.info("Routes :: Mounting API Routes...");

    return _express.use("/", apiRouter);
  }
}

export default new Routes();
