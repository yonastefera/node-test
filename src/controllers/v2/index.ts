import { Router } from "express";

import * as homeController from "./home";
import * as parseController from "./parse";

const router = Router();

router.get("/", homeController.baseApi);
router.post("/parse", parseController.postBaseApi);

export default router;
