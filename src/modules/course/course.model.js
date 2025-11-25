import { model, Schema } from "mongoose";



const courseSchema = new Schema({
CourseName:{
    type:String,
    required:true    
},
img:{
    type:String,
    required:true
},
icon1Title:{
    type:String,
    required:true
},
icon2Title:{
    type:String,
    required:true   
},
mainTitle:{
    type:String,    
    required:true
},
description:{
    type:String,
    required:true
},
profileName:{
    type:String,
    required:true
},
deletePrice:{
    type:Number,
    required:true 
},
recentPrice:{
    type:Number,
    required:true 
}
})

const Course= model("Course",courseSchema)
export default Course