import log from "../middlewares/log";

class Handler {
  /**
   * Handles all the not found routes
   */
  public static notFoundHandler(_express): any {
    _express.use("*", (req, res) => {
      const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

      log.error(`Path '${req.originalUrl}' not found [IP: '${ip}']!`);
      res.status(404);
      return res.json({
        error: "Not Found",
      });
    });

    return _express;
  }

  /**
   * Handles your api/web routes errors/exception
   */
  public static errorHandler(err, req, res, next): any {
    log.error(err.stack);
    res.status(500);
    return res.json({
      error: "Something went wrong!",
    });
  }

  /**
   * Register your error / exception monitoring
   * tools right here ie. before "next(err)"!
   */
  public static logErrors(err, req, res, next): any {
    log.error(err.stack);

    return next(err);
  }
}

export default Handler;
