import mongoose from "mongoose"


const mongodB = async (uri)=>{
try {
    mongoose.connect(uri)
console.log("mongodb connect")

} catch (error) {
    console.log("database connection faild",error)
}
}
export default mongodB