import app from "./server/server.js"
import dotenv from "dotenv"
import { connectDB } from "./config/mongoDB.js"
//import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB();

const port=process.env.PORT as string

app.use("/api",()=>{
    console.log("Hola")
})
//app.use("/api/v1",userRoutes);

app.listen(port,()=>{
    console.log(`Time to test: http://localhost:${port}`)
})