import express from "express";
import { getMessages, sendMessage } from "../Controllers/messageController.js";
import isLogin from "../Middlewares/isLogin.js";

const router = express.Router();

router.post("/send/:id", isLogin, sendMessage);

router.get("/:id", isLogin, getMessages);

export default router;
