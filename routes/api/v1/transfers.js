const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/api/v1/transfers');

// POST transfer
router.post("/", controller.create);

// GET transfers
router.get("/", controller.getTransfers);

// GET transfer with id
router.get("/", controller.getTransferById);

// GET leaderboard
router.get("/", controller.getLeaderboard);

module.exports = router;

