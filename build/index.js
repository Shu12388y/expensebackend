"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const financial_records_1 = __importDefault(require("./routes/financial-records"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const mongoURI = "mongodb+srv://adityarai1352:HnHAEodeMTqpdQJs@cluster0.aimxdan.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
app.use("/financial-records", financial_records_1.default);
mongoose_1.default
    .connect(mongoURI)
    .then(() => {
    console.log("db connected");
    app.listen(port, () => {
        console.log(`Server Running on Port ${port}`);
    });
}).catch((err) => console.error("Failed to Connect to MongoDB:", err));
