

import { Router } from "express";
import {  getUser, logoutUser, userCreate, userLogin } from "./user.controller.js";
import { authMidleware } from "../../middleware/auth.js";

const router =Router()

router.post("/register", userCreate)
router.post("/login", userLogin)
router.get("/", authMidleware, getUser)
router.post("/logout", logoutUser)






export default router