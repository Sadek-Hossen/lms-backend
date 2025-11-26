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


export const getSingleCourse = async (req,res)=>{
    try {
        const {id}= req.params;
        console.log("this is single course id: ",id)
       const courses = await Course.findById(id)
        res.status(200).json({
            message:"single course fetched successfully",
            courses
        })
     //
       console.log(courses)
    } catch (error) {
        res.status(500).json({
            message:"failed to fetch single course",
            error:error.message
        })
    }
}

export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCourse = await Course.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({
      message: "course updated successfully",
      course: updatedCourse,
    });
  } catch (error) {
    res.status(500).json({
      message: "failed to update course",
      error: error.message,
    });
  }
};