import { Response, Request, NextFunction } from "express";

import { IRequest, IResponse } from "../../interfaces/index";

/**
 * Parse API.
 * @route POST /
 */
export const postBaseApi = (req: Request, res: Response) => {
  const payload: IRequest = req.body;
  if (!payload.data || typeof payload.data !== "string")
    return res.status(400).json({ error: "Invalid input parameters!" });

  const dataArray = payload.data.split("0");
  const r = dataArray.reduce((acc, cur) => {
    if (cur !== "") acc.push(cur);
    return acc;
  }, []);

  const result: IResponse = {
    statusCode: 200,
    data: {
      firstName: r[0] || "",
      lastName: r[1] || "",
      clientId: r[2] || "",
    },
  };
  return res.status(200).json(result);
};
