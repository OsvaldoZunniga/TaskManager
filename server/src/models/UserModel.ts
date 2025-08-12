import mongoose from "mongoose";

export interface IUser extends Document{
    name:string; email:string, password:string;
}

const userSchema = new mongoose.Schema({
    username:{type : String, required:true, unique:true},
    email:{type : String, required:true, unique:true},
    password:{type : String, required:true}

},
{timestamps:true})

export const User = mongoose.model<IUser>('users',userSchema);
