import app from "./server/server.js"
import dotenv from "dotenv"
import { connectDB } from "./config/mongoDB.js"

dotenv.config()

connectDB();

const port=process.env.PORT as string

app.listen(port,()=>{
    console.log(`Time to test: http://localhost:${port}`)
})