import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI as string
        await mongoose.connect(MONGO_URI);
        console.log("The database conecction was successful")
    } catch (err) {
        console.log("The Database connection failed: ", err)
    }
}
