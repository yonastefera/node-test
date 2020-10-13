import { Response, Request, NextFunction } from "express";

import { IRequest, IResponse } from "../../interfaces";

/**
 * Parse API.
 * @route POST /
 */
export const postBaseApi = (req: Request, res: Response) => {
  const payload: IRequest = req.body;
  if (!payload.data || typeof payload.data !== "string")
    return res.status(400).json({ error: "Invalid input parameters!" });

  const dataArray = payload.data.split("");
  let flag = 0;
  const rArr = [];
  const r = dataArray.reduce((acc, cur, idx) => {
    function checkPoint() {
      acc.push(rArr.join(""));
      rArr.length = 0;
      flag = 0;
    }
    if (cur === "0") flag = 1;
    if (flag && cur !== "0") checkPoint();
    rArr.push(cur);
    if (idx === dataArray.length - 1) checkPoint();
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
