import Router from "express-promise-router";
import {
    getGraduates,
    checkGraduate
} from "../controllers/graduates.controller.js";

const router = Router();

router.get("/graduates", getGraduates);

router.get("/graduates/:github", checkGraduate);

export default router;
