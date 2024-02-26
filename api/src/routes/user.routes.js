import Router from "express-promise-router";
import {
    resolveExercise
} from "../controllers/user.controller.js";

const router = Router();

router.post("/user/:user/exercise/:exercise", resolveExercise);

export default router;
