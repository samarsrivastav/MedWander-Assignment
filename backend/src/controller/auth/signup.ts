import { Request, Response } from "express";
import bycrypt from 'bcrypt'
import user from "../../model/auth";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const signup=async (req:Request,res:Response)=>{
    try {
        const {username,password}=req.body;
        const hashedPwd=await bycrypt.hash(password,11)
        const exist=await user.findOne({
            username
        })
        if(exist){
            res.status(403).json({
                message:"Username already exists"
            })
        }
        const result=await user.create({
            username,
            password:hashedPwd
        })
        const token = jwt.sign(username,process.env.JWT_SECRET || " ")
        res.cookie("token",token)
        res.status(200).json({
            message:"User created succesfully",
            result,
            token
        })
    } catch (error) {
        res.status(403).json({
            message:"User Not created",
            error
        })
    }
}
export default signup