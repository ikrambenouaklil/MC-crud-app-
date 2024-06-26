const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/user");
// const dotenv = require("dotenv");
// dotenv.config();

// const DB_URL = process.env.DB_URL;

app.use(
  cors({
    origin: [
      "https://mc-crud-app-homework.netlify.app",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

app.use(express.json());

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));

db.once("open", () => console.log("connected to db"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log("listen to the port " + PORT);
});
