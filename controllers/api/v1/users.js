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
                    "email": "elon@musk.com",
                    "password": "12345",
                    "balance": 100
                },
                {
                    "id": 2,
                    "username": "Joris",
                    "email": "josir@musk.com",
                    "password": "12345",
                    "balance": 200
                },
                {
                    "id": 3,
                    "username": "Rix",
                    "email": "rix@musk.com",
                    "password": "12345",
                    "balance": 300
                },
                {
                    "id": 4,
                    "username": "jos",
                    "email": "jos@jos.com",
                    "password": "12345",
                    "balance": 150
                },
            ]
        }
    }
    res.json(response);

}


module.exports.getLeaderboard = getLeaderboard;