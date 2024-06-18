import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string =
  "mongodb+srv://adityarai1352:HnHAEodeMTqpdQJs@cluster0.aimxdan.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



app.use("/financial-records", financialRecordRouter);


mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("db connected")
    app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
})
}).catch((err) => console.error("Failed to Connect to MongoDB:", err));


