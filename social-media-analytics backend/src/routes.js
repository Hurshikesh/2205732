const express = require("express");
const { getTopUsers, getTopPosts } = require("./services");

const router = express.Router();

// Route to get top users
router.get("/users", async (req, res) => {
  try {
    const users = await getTopUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get top/latest posts
router.get("/posts", async (req, res) => {
  try {
    const type = req.query.type;
    if (!type || (type !== "latest" && type !== "popular")) {
      return res.status(400).json({ error: "Invalid type parameter" });
    }

    const posts = await getTopPosts(type);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
