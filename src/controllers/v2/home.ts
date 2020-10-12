import { Response, Request, NextFunction } from "express";

/**
 * Home index API.
 * @route GET /
 */
export const baseApi = (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Welcome to nodeTest!",
    version: "2.0.0",
  });
};
