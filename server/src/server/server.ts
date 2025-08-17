import express, { type Application } from "express";
import morgan from "morgan"
import routes from "../routes/routes.js";

const app: Application= express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v2", routes())

export default app;