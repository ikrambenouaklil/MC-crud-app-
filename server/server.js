// eslint-disable-next-line no-undef
const express = require("express");
const mongoose = require("mongoose"); 
const cors = require("cors")
const app = express();
const PORT = 3000;
const userRouter = require("./routes/user")
app.use(
  cors()
);

app.use(express.json())

  mongoose.connect(
    "mongodb+srv://ikrambn2002:lDSfBNMxjmIQ5VHU@crud.rc7gyjp.mongodb.net/CRUDdata"
  );
const db = mongoose.connection; 
db.on("error", (error) => console.error(error));

db.once('open', ()=>console.log("connected to db"))

app.use("/users", userRouter);
app.
app.listen(PORT, () => {
  console.log("listen to the port " + PORT);
});
