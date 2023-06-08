import { Router } from "express";
import { createUser } from "../controllers/User.controller.js";

const router = Router();

router.post("/user", createUser);

export default router;
