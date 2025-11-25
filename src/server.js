import app from "./app.js";
import dotenv from 'dotenv'


dotenv.config()




const port =process.env.PORT || 5000


app.get("/",(req,res)=>{
    res.send("Hello home app")
})

app.listen(port,()=>{
    console.log(`server running from  http://localhost:${port}`)
})