import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoute from './modules/user/user.router.js'
import courseRouter from "./modules/course/course.router.js"
import mongodB from './config/db.js'
import cookieParser from "cookie-parser";

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors({
     origin: "https://lms-client-ruby.vercel.app",  // your frontend URL
  credentials: true 
}))
app.use(cookieParser())


//db connected
const uri =process.env.MONGO_URI || "mongodb://localhost:27017/LMS_project"
mongodB(uri)
// all routes
app.use("/api/user",userRoute)
app.use("/api/course",courseRouter)




export default app