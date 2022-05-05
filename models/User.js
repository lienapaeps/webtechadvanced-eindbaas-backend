const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // sender, receiver, amount, message, status
    id: {
        type: String,
        required: true
    },
    username: {
        type:  String,
        required: true
    },
    email: { 
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;