import Router from "express-promise-router";
import {
    scarbBuild,
    scarbTest,
} from "../controllers/scarb.controller.js";

const router = Router();

router.post("/scarb/build", scarbBuild);

router.post("/scarb/test", scarbTest);

export default router;