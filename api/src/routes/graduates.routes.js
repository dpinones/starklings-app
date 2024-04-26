import Router from "express-promise-router";
import {
    getGraduates,
} from "../controllers/graduates.controller.js";

const router = Router();

router.get("/graduates", getGraduates);

export default router;
