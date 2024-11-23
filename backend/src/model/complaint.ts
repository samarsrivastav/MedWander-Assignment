import mongoose, { Schema } from "mongoose";
interface ComplaintInterface {
    title: string,
    description: string,
    category: string,
    priority: string,
    status: string,
    dateSubmitted: Date
}
const ComplaintModel: Schema = new Schema({
    title: String,
    description: String,
    category: String,
    priority: String,
    status: String,
    dateSubmitted: Date
})
const complaint = mongoose.model<ComplaintInterface>('complaintModel', ComplaintModel)
export default complaint