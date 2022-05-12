const Transfer = require('../../../models/transfer');

// POST transfer
const create = (req, res) => {
    let transfer = new Transfer();
    transfer.sender = req.body.sender;
    transfer.receiver = req.body.receiver;
    transfer.amount = req.body.amount;
    transfer.message = req.body.message;

    transfer.save((err, doc) => {
        if (!err) {
            res.json( {
                "status": "Success",
                "data": {
                    "transfer": doc
                }
            });
        } else if (err) {
            res.json( {
                "status": "Error",
                "message": "Error while creating transfer"
            });
        }
    } );

    // console.log(req.body);
    // res.send("POSTING new message");
}

// GET transfers
const getTransfers = (req, res) => {
    const response = {
        status: "success",
        data: {
            transfers: [
                {
                    "sender": "Elon",
                    "receiver": "Rix",
                    "amount": "100",
                    "message": "Javascript is fun!!✌",
                    "time": "10-05-2022 10:00"
                },
                {
                    "sender": "Rix",
                    "receiver": "Joris",
                    "amount": "200",
                    "message": "Test message lorem de ipsum.",
                    "time": "10-05-2022 10:00"
                },
            ]
        }
    }
    res.json(response);
}

// GET transfer with id
const getTransferById = (req, res) => {
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


module.exports.create = create;
module.exports.getTransfers = getTransfers;
module.exports.getTransferById = getTransferById;