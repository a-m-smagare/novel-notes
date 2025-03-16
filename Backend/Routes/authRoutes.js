import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pkg from "pg";
const { Pool } = pkg;
import "dotenv/config";

const router = express.Router();
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});

// Test route
router.get("/", (req, res) => {
    res.json({ message: "Auth route is working!" });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await pool.query("SELECT * FROM users WHERE username = $1", [username]);

        if (user.rows.length === 0) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const isMatch = await bcrypt.compare(password, user.rows[0].password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password"});
        }

        const token = jwt.sign({ userId: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: "1h"});

        res.json({ token, user: user.rows[0] });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

router.post("/register", async (req, res) => {
    const {name, username, password} = req.body;

    try {
        const userExists = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ message: "User already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await pool.query("INSERT INTO users (name, username, password) VALUES ($1, $2, $3) RETURNING *", [name, username, hashedPassword]);

        const token = jwt.sign({ userId: newUser.rows[0].id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, user: newUser.rows[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
