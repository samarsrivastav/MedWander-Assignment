import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyAuth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({ message: "Access denied. No token provided." });
      return; 
    }

    const secret = process.env.JWT_SECRET || "default_secret";
    const decoded = jwt.verify(token, secret);
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token.", error });
  }
};

export default verifyAuth;
