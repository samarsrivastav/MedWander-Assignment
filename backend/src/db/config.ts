import mongoose from "mongoose";
const connectDb=async ()=>{
    try{
        const connect=mongoose.connect(process.env.DB_URL || "")
    }catch (e){
        console.error("db connection issue")
    }
}