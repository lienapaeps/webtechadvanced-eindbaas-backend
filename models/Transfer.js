const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transferSchema = new Schema({
    // schema for transfer
})

const Transfer = mongoose.model('Transfer', transferSchema);

module.exports = Transfer;