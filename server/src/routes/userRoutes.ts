import { Router } from "express";
import { createUser, getUsers } from "../controllers/userController.js";
const router = Router();

router.post("/create-user", createUser)
router.get("/getall", getUsers)

export default router;