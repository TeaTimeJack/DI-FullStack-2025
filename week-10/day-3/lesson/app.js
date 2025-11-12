import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import userRouter from "./routs/userRout.js"

import { dbneon } from "./config/db.js";

config();

const app = express();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});

app.use(cookieParser());
app.use(express.json());
app.use(cors());

const rows = await dbneon("users_a");
console.log("users_a",rows);


app.use("/api/user", userRouter)