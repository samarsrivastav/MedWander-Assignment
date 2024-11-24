import { Request, Response } from "express";

const logout = async (req: Request, res: Response) => {
    res.cookie("token","")
    res.json({
        message:"logged out successfully"
    })
};

export default logout;
