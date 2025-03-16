import express from "express";
import authMiddleware from "../Middleware/authMiddleware.js";
import pkg from "pg";

const { Pool } = pkg;
const router = express.Router();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

router.get("/user-home", authMiddleware, (req, res) => {
    res.json({ 
        message: "Welcome to User Home Page!",
        user: req.user,
     });
});

router.get("/user-profile", authMiddleware, async (req, res) => {
    console.log("Request recieved");
    try {
        const userId = req.user.userId;
        const result = await pool.query("SELECT id, name, username FROM users WHERE id = $1", [userId]);

        if (result.rows.length > 0) {
            return res.json(result.rows[0]);
        } else {
            return res.status(404).json({ message: "User not found"});
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error"});
    }
});

router.get("/user-reviews", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.userId;
        const result = await pool.query("SELECT id, img, title, author, year, review FROM reviews WHERE user_id = $1", [userId]);

        return res.json(result.rows);
    } catch (error) {
        console.error("Error fetching reviews: ", error);
        return res.status(500).json({ message: "Server error" });
    }
});

router.post("/add-review", authMiddleware, async (req, res) => {
    try {
        const { img, title, author, year, review } = req.body;
        const userId = req.user.userId;

        if (!title || !author || !review) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        const response = await pool.query("INSERT INTO reviews (user_id, img, title, author, year, review) VALUES ($1, $2, $3, $4, $5, $6)", [userId, img, title, author, year, review]);

        return res.status(201).json({ message: "Review added successfully" });
    } catch (error) {
        console.error("Error adding review: ", error);
        return res.status(500).json({ message: "Server error" });
    }
});

router.get("/reviews/:id", authMiddleware, async (req, res) => {
    const { id } = req.params;
    console.log('Backend received review request for ID:', id);
    try { 
        const userId = req.user.userId;
        const result = await pool.query("SELECT id, img, title, author, year, review FROM reviews WHERE id = $1", [id]);

        if (result.rows.length > 0) {
            return res.json(result.rows[0]);
        } else {
            return res.status(404).json({ message: "Review not found or not authorized"});
        }
    } catch (error) {
        console.error("Error fetching review:", error);
        return res.status(500).json({ message: "Server error" });
    }
});

router.put("/edit-review/:id", authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { img, title, author, year, review } = req.body;
    const userId = req.user.userId;

    try {
        const result = await pool.query("UPDATE reviews SET img = $1, title = $2, author = $3, year = $4, review = $5 WHERE id = $6 AND user_id = $7 RETURNING *", [img, title, author, year, review, id, userId]);

        if (result.rows.length > 0) {
            res.json({ message: "Review updated successfully!", review: result.rows[0]});
        } else {
            res.status(404).json({ message: "Review not found or not authorized to edit." });
        }
    } catch (error) {
        console.error("Error updating review:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// For review deletion
router.delete("/delete-review/:id", authMiddleware, async (req, res) => {
    const { id } = req.params;
    const userId = req.user.userId;

    try {
        const result = await pool.query("DELETE FROM reviews WHERE id = $1 AND user_id = $2", [id, userId]);

        if (result.rowCount > 0) {
            return res.status(200).json({ message: "Review deleted succesfully!"})
        } else {
            return res.status(404).json({ message: "Review not found or you are not authorized to delete it." });
        }
    } catch (error) {
        console.error("Error deleting review: ", error);
        res.status(500).json({ message: "Server error" });
    }
});

// For user deletion
router.delete("/delete", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.userId;
        const result = await pool.query("DELETE FROM users WHERE id = $1", [userId]);
        return res.status(200).json({ message: "Account deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error deleting account" });
    }
});

export default router;
