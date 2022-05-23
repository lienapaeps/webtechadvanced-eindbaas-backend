const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    // id: {
    //     type: Number,
    //     required: true
    // },
    // username: {
    //     type:  String,
    //     required: true
    // },
    // email: { 
    //     type: String,
    //     required: true
    // },
    // password: {
    //     type: String,
    //     required: true
    // },
    // balance: {
    //     type: Number,
    //     required: true
    // }
});

User.plugin(passportLocalMongoose);

// const User = mongoose.model('User', userSchema);

module.exports = mongoose.model('User', User);