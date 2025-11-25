import { Router } from "express";
import { createCourse, getCourses } from "./course.controller.js";


const router =Router()

router.post("/create", createCourse)
router.get("/",getCourses)



export default router