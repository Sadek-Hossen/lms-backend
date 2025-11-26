import { Router } from "express";
import { createCourse, getCourses, getSingleCourse, updateCourse } from "./course.controller.js";


const router =Router()

router.post("/create", createCourse)
router.get("/",getCourses)
router.get("/details/:id", getSingleCourse)
router.put("/course/:id", updateCourse)




export default router