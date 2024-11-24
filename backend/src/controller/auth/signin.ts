import { Request, Response } from "express";
import bcrypt from "bcrypt";
import user from "../../model/auth";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const signin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const existingUser = await user.findOne({ username });
    if (!existingUser) {
        res.status(403).json({
        message: "Invalid Username or Password",
      });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      res.status(403).json({
        message: "Invalid Username or Password",
      });
      return;
    }

    const token = jwt.sign(
      { username: existingUser.username, id: existingUser._id },
      process.env.JWT_SECRET || "default_secret"
    );

    res.cookie("token", token);

    res.status(200).json({
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while logging in",
      error: error,
    });
  }
};

export default signin;
