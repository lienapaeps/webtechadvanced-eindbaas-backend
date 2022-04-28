const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transferSchema = new Schema({
    // sender, receiver, amount, status
    sender: {

    },
    receiver: {

    },
    amount: { 

    },
    status: {

    }
});

const Transfer = mongoose.model('Transfer', transferSchema);

module.exports = Transfer;