import { Request, Response } from "express";
import complaint from "../model/complaint";
export const readComplaint = async (req: Request, res: Response) => {
    try {
        const result = await complaint.find()
        res.status(200).json({
            message: "Results fetched succesfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: "error while fetching the complaints"
        })
    }
}