const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/api/v1/users');

// GET leaderboard
router.get("/", controller.getLeaderboard);

//sign up
router.post("/register", controller.register);

module.exports = router;
