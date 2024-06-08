import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authroutes from "./Routes/authroutes.js";
import messageroutes from "./Routes/messageroutes.js";
import userroutes from "./Routes/userroutes.js";
import connnecToMongoDb from "./db/connectbyMongoDb.js";
dotenv.config();

const app = express();
const PORT = process.env.Port || 5000;
app.use(cookieParser());
app.use(express.json()); // to parse data in JSON format
app.use("/api/auth", authroutes);
app.use("/api/message", messageroutes);
app.use("/api/users", userroutes);
app.listen(PORT, () => {
    connnecToMongoDb();
    console.log("Server is running on port", PORT);
});
