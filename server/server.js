// eslint-disable-next-line no-undef
const express = require("express");
const mongoose = require("mongoose"); 
const cors = require("cors")
const app = express();
const PORT = 3000;
const userRouter = require("./routes/user")
app.use(
  cors({
    origin: ["https://prismatic-smakager-8526e1.netlify.app"],
  })
);

app.use(express.json())

  mongoose.connect(
    "mongodb+srv://ikrambn2002:lDSfBNMxjmIQ5VHU@crud.rc7gyjp.mongodb.net/CRUDdata"
  );
const db = mongoose.connection; 
db.on("error", (error) => console.error(error));

db.once('open', ()=>console.log("connected to db"))
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
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
