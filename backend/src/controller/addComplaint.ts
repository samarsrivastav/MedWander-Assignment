import { Request, Response } from "express";
import nodemailer from "nodemailer";
import complaint from "../model/complaint";

export const addComplaint = async (req: Request, res: Response) => {
    try {
        const { title, description, category, priority, status } = req.body;

        const newComplaint = new complaint({
            title,
            description,
            category,
            priority,
            status,
            dateSubmitted: new Date(),
        });

        const savedComplaint = await newComplaint.save();

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
            subject: "New Complaint Added",
            text: `A new complaint has been added!! \n Title: ${savedComplaint.title}\n Description: ${savedComplaint.description}\n Category: ${savedComplaint.category}\n Priority: ${savedComplaint.priority}\n Status: ${savedComplaint.status}\n Date Submitted: ${savedComplaint.dateSubmitted}`,
        });

        res.status(201).json({ message: "Complaint added and email sent", complaint: savedComplaint });
    } catch (error) {
        res.status(500).json({ message: "Failed to add complaint", error: error });
    }
};
