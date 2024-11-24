import mongoose, { mongo, Schema } from "mongoose";

interface userITF{
    username :string,
    password :string,
}
const userModel:Schema=new Schema({
    username: String,
    password: String
})
const user=mongoose.model<userITF>('user',userModel)
export default user