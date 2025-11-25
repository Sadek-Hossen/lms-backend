import User from "./user.model.js";
import bcrypt from "bcrypt";
import JWT from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET || "b3f1a6e8c9d42a7f13b26e9f804b1d5c"

export const userCreate = async (req, res) => {
  try {
    
    const { name, email, password } = req.body;
    console.log("this coming from req.body",req.body)
    if (!name || !email || !password) {
      return res.status(400).json({message:"all field require"})
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
   // console.log("this is our user informetions",user)

    res.status(201).json({
      message: "User created successfully",
      user,
    });

  } catch (error) {
    res.status(500).json({
      message: "User creation failed from user controller",
      error: error.message,
    });
  }
};
export const userLogin = async (req, res) => {
  try {
    
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({message:"all field require"})
    }

    const user = await User.findOne({email})

     if(!user){
      return res.status(401).json({message:"email don't matching"})
    }
    const matchUser = await bcrypt.compare(password,user.password);
    
    if(!matchUser){
      return res.status(401).json({message:"password not matching"})
    }

   
 const token =JWT.sign({userId:user?._id,name:user?.name,email:user?.email},JWT_SECRET,{
      expiresIn:"7d"
     })


  res.cookie("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // only prod
  sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax',
  maxAge: 7*24*60*60*1000,
});



  //  console.log("this is our user informetions",user,token)

    res.status(200).json({
      message: "User login successfully",
      user,
      token
    });


  } catch (error) {
    res.status(500).json({
      message: "User login failed from user login controller",
      error: error.message,
    });
  }
};

export const getUser = async ( req,res)=>{
try {
  const email = req.user?.email;
  //console.log("this is our email from get user ",email)
  if(!email){
    return res.send( "user feild required")
  }

    const user  = await User.findOne({email})

//console.log("this is our email from get user",email)

    res.status(200).json({
      message:"user get succesfully",
      user
    })
  }
catch (error) {
    return  res.status(400).json({
      message:"user get faild from get controller"
    })
}

}
