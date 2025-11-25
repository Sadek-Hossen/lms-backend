import jwt  from "jsonwebtoken";



export const authMidleware = (req,res,next)=>{
    const token = req.cookies?.token;
    //const envtoken=process.env.JWT_SECRET
    // console.log("this is your main token ",token)
  //   console.log("this is token from env",envtoken)
    if(!token){
       return res.status(401).json({message:"token not found"})
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded
     //console.log("this is decoded",decoded)
        next()
     
    } catch (error) {
        res.status(404).json({message:"invalid token"})
    }

}