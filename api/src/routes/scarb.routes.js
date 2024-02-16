import Router from "express-promise-router";
import {
    scarbBuild
} from "../controllers/scarb.controller.js";

const router = Router();

router.post("/scarb/build/:user", scarbBuild);

export default router;