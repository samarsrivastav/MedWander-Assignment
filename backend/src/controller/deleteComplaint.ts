import { Request, Response } from "express";
import complaint from "../model/complaint";
export const deleteComplaint=async(req:Request,res:Response)=>{
    try {
        const id=req.body.id
        const exists=complaint.find({
            _id:id
        })
        if(!exists){
            res.status(403).json({
                message:"The complaint doesn't exist"
            })
        }
        const dc=await complaint.deleteOne({
            _id:id
        })
        res.status(200).json({
            message:"The complaint has been deleted"
        })
    } catch (error) {
        res.status(500).json({
            error:error,
            message:"Error while deleting"
        })
    }
}