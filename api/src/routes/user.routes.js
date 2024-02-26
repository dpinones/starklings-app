import Router from "express-promise-router";
import {
    getExercisesByUser,
    resolveExercise
} from "../controllers/user.controller.js";

const router = Router();

router.post("/user/:user/exercise/:exercise", resolveExercise);

router.get("/user/:user/exercise", getExercisesByUser);

export default router;
