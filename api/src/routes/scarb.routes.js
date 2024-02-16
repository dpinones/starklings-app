import Router from "express-promise-router";
import {
    scarbBuild,
    scarbTest
} from "../controllers/scarb.controller.js";

const router = Router();

router.post("/scarb/build/:user", scarbBuild);

router.post("/scarb/test/:user", scarbTest);

export default router;
