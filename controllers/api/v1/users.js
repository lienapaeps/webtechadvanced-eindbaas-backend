const User = require('../../../models/user');

// GET leaderboard
const getLeaderboard = (req, res) => {
    const response = {
        status: "success",
        data: {
            users: [
                {
                    "id": 1,
                    "username": "ElonX",
                    "balance": 100
                },
                {
                    "id": 2,
                    "username": "Joris",
                    "balance": 200
                },
                {
                    "id": 3,
                    "username": "Rix",
                    "balance": 300
                }
            ]
        }
    }
    res.json(response);

}


module.exports.getLeaderboard = getLeaderboard;