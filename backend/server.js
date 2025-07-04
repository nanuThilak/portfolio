import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserModel from "./model/User.model.js";
import path from "path";
const app = express();
const __dirname = path.resolve();
const PORT = 4000 || process.env.PORT;
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

async function connectDB() {
  try {
    const connectDb = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `mongoDB is connected successfully ${connectDb.connection.host}`
    );
  } catch (error) {
    console.log(error);
  }
}
app.post("/api/send", (req, res) => {
  try {
    const { name, email, message } = req.body;
    UserModel.create({
      name,
      email,
      message,
    });
    res.json({ message: "Thank You for contact me" });
  } catch (error) {
    console.log(error);
  }
});
console.log(path.join(__dirname, "../portfolio/dist/index.html"));
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../portfolio/dist")));
  app.get("/api/send", (req, res) => {
    res.sendFile(path.join(__dirname, "../portfolio/dist/index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`server was started on ${PORT} PORT`);
  connectDB();
});
