const Transfer = require('../../../models/transfer');

// POST transfer
const create = (req, res) => {
let transfer = new Transfer();
console.log(req.body);
}

// GET transfers
const getTransfers = (req, res) => {
    const response = {
        status: "success",
        data: {
            transfers: [
                {
                    "sender": "Elon",
                    "receiver": "Tesla",
                    "amount": "100",
                    "message": "Javascript is fun!!✌"
                },
            ]
        }
    }
    res.json(response);
}

// GET transfer with id
const getTransferById = (req, res) => {

}

// GET leaderboard
const getLeaderboard = (req, res) => {

}

module.exports.create = create;
module.exports.getTransfers = getTransfers;
module.exports.getTransferById = getTransferById;
module.exports.getLeaderboard = getLeaderboard;