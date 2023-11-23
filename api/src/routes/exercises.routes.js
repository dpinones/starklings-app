import Router from "express-promise-router";
import {
  getAllExercises,
  getExercise,
} from "../controllers/exercises.controller.js";

const router = Router();

router.get("/exercises", getAllExercises);

router.get("/exercises/:id", getExercise);

export default router;
