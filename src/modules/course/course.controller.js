import Course from "./course.model.js"


export const createCourse = async (req,res)=>{
    try {
         const course = await Course.create(req.body)
         res.status(201).json({
            message:"course create succesfully",
            course
         })
         console.log("this is course data",course,req.body)
    } catch (error) {
        res.status(500).json({
            message:"course creation failed from course controller",
            error:error.message
         })
    }
}

export const getCourses = async (req,res)=>{
    try {
        const courses = await Course.find()
        res.status(200).json({
            message:"courses fetched successfully",
            courses
        })
    } catch (error) {
        res.status(500).json({
            message:"failed to fetch courses",
            error:error.message
        })
    }
}