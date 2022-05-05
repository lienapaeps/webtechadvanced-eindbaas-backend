const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transferSchema = new Schema({
    // sender, receiver, amount, message, status
    sender: {

    },
    receiver: {
        
    },
    amount: { 
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: Boolean
});

const Transfer = mongoose.model('Transfer', transferSchema);

module.exports = Transfer;