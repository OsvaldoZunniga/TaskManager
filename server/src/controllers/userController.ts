import type { Request, Response } from "express";
import {User} from "../models/UserModel.js"
import type { IUser } from "../models/UserModel.js";

export const createUser=async (req: Request, res: Response) => {
    const {username,email,password}= req.body;
    try {
        const newUser: IUser=new User({username,email,password});
        await newUser.save();
        res.status(201).json(newUser)
        
    } catch (error) {
        console.error('Muy cristal');
    }
}

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener los usuarios" })
  }
}