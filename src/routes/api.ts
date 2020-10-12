import { Router } from "express";

import v1Routes from "../controllers/v1/index";
import v2Routes from "../controllers/v2/index";

const router = Router();

router.use("/api/v1", v1Routes);
router.use("/api/v2", v2Routes);

export default router;
