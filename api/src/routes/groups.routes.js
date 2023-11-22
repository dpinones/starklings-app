import Router from "express-promise-router";
import {
  getAllGroups,
  getGroup,
} from "../controllers/groups.controller.js";

const router = Router();

router.get("/groups", getAllGroups);

router.get("/groups/:id", getGroup);

export default router;
