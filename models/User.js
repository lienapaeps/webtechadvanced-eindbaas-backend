const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    // username en password zitten er standaard in 
    email: { 
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 100
    }
});

User.plugin(passportLocalMongoose);

// const User = mongoose.model('User', userSchema);

module.exports = mongoose.model('User', User);