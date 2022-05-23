const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/api/v1/users');
const authController = require('../../../controllers/api/v1/auth');

// GET leaderboard
router.get("/", controller.getLeaderboard);

// register
router.post("/register", authController.register);
// login
router.post("/login", authController.login);

module.exports = router;
