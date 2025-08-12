import { Router } from "express";
import {User} from "../models/UserModel.js";

const router = Router();

router.post("/create-user", async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save();
        res.status(201).json(user);
        
    } catch (error) {
        console.error('Muy cristal');
        
    }
})

export default router;