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
    Transfer.find( (err, docs) => {
        if (err) {
            res.json( {
                "status": "Error",
                "message": err
            });
        }

        if(!err) {
            res.json( {
                "status": "Success",
                "data": {
                    transfers: docs
                }
            });
        }

    } )
}

// GET transfer with id
const getTransferById = (req, res) => {
    Message.find({"_id": req.params.id}, (err, doc) => {
        if (err) {
            res.json({
                "status": "Error",
                "message": err
            });
        }

        if(!err) {
            res.json({
                "status": "Success",
                "data": {
                    transfer: doc
                }
            });
        }
    })
}


module.exports.create = create;
module.exports.getTransfers = getTransfers;
module.exports.getTransferById = getTransferById;