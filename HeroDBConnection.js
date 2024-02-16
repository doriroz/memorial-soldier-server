import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./HeroDBRouting.js";

const app = express();

const corsOption = {
  origin: "https://memorial-soldier.netlify.app/",
  methods: "GET ,POST ,PUT ,DELETE",
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader("Cache-Control", "no-store");
//   next();
// });

app.use("/", router);

mongoose
  .connect(
    "mongodb+srv://doriroz:matrix34@cluster0.rjpf6.mongodb.net/HeroApp?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongosDB Atlas");
  })
  .catch((error) => {
    console.log(error.message);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
