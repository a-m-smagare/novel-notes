import "dotenv/config";  
import express from "express";  
import cors from "cors";  
import pkg from "pg";
import authRoutes from './Routes/authRoutes.js';
import userRoutes from "./Routes/userRoutes.js";

const { Pool } = pkg;
const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Test route
app.get("/", (req, res) => {
    res.json({ message: "✅ Backend is running!" });
});

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
