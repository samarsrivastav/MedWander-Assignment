import { Request, Response } from "express";
import complaint from "../model/complaint";
import nodemailer from "nodemailer";

export const updateComplaint= async (req: Request, res: Response)=> {
  try {
    const { id } = req.body;
    const { status } = req.body;

    if (!["Pending", "In Progress", "Resolved"].includes(status)) {
       res.status(400).json({ message: "Invalid status value" });
    }
    const exists=complaint.find({
        _id:id
    })
    if(!exists){
        res.status(403).json({
            message:"The complaint doesn't exist"
        })
    }
    const updatedComplaint = await complaint.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedComplaint) {
       res.status(404).json({ message: "Complaint not found" });
    }
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "samarsrivastav2222@gmail.com", //admin
        subject: "Complaint status changed",
        text: `The status of the complaint id: ${id} has been changed to ${status}`,
      });

    res.status(200).json({ message: "Complaint status updated", complaint: updatedComplaint });
  } catch (error) {
    res.status(500).json({ message: "Failed to update complaint status", error: error});
  }
}
