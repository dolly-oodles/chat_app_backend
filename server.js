import express from "express";
import dotenv from "dotenv";
import dbConnect from "./DB/dbConnect.js";
import authRouter from "./Routes/authUser.js";
import messageRouter from "./Routes/messageRoute.js";
import userRouter from "./Routes/userRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
    methods: "*",
    // credentials: true,
    // allowedHeaders: "Content-Type,Authorization",
  })
);

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.send("Server is working");
});
app.listen(PORT, () => {
  dbConnect();
  console.log(`listening on ${PORT}`);
});
