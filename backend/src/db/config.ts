import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const connectDb=async ()=>{
    try{
        const connect=mongoose.connect(process.env.DB_URL || "")
        console.log("db connected")
    }catch (e){
        console.error("db connection issue")
    }
}
export default connectDb