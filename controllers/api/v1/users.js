const User = require('../../../models/user');

// GET leaderboard
const getLeaderboard = (req, res) => {
    const response = {
        status: "success",
        data: {
            transfers: [
                {
                    "username": "ElonX",
                    "balance": 100
                },
            ]
        }
    }
    res.json(response);

}


module.exports.getLeaderboard = getLeaderboard;