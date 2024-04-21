//server/src/routes/routes.js
import UserController from "../controllers/controller.js";
import express from "express";

const router = express.Router();
const userController = new UserController();

router.post("/register", userController.register);
router.post("/login", userController.login);

export default router;
