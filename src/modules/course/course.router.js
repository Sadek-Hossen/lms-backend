import { Router } from "express";
import { createCourse, getCourses, getSingleCourse } from "./course.controller.js";


const router =Router()

router.post("/create", createCourse)
router.get("/",getCourses)
router.get("/details/:id", getSingleCourse)




export default router