import express from "express";
import isLogin from "../Middlewares/isLogin.js";
import {
  getCurrentChatters,
  getUserBySearch,
} from "../Controllers/userHandleController.js";

const router = express.Router();
router.get("/searchUser", isLogin, getUserBySearch);
router.get("/currentChatters", isLogin, getCurrentChatters);

export default router;
