import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    encoleCourse:{
        type:Schema.Types.ObjectId,
        ref:"course"
    }
},{timestamps:true})

const User = model("User",userSchema)
export default User