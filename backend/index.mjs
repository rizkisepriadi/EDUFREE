import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Hey, Your connecting to Edufree");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("You're connected to database"))
  .catch((error) => {
    console.error("Failed connected to database", error);
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log("App is listening to PORT:", PORT);
});
